import { env } from "@/env";
import { UserSubscription } from "@/lib/schema/userSubscription";
import { webhookHasData, webhookHasMeta } from "@/lib/typegurds";
import connectMongoose from "@/lib/config/mongoose";
import { planDetails } from "@/lib/config/plan";
import { Types } from "mongoose";
import crypto from "node:crypto";
import { AxiomRequest, Logger, withAxiom } from "next-axiom";

export const POST = withAxiom(async (request: AxiomRequest) => {
  if (!process.env.LEMONSQUEEZY_WEBHOOK_SECRET) {
    return new Response("Lemon Squeezy Webhook Secret not set in .env", {
      status: 500,
    });
  }

  // First, make sure the request is from Lemon Squeezy.
  const rawBody = await request.text();
  const secret = env.LEMONSQUEEZY_WEBHOOK_SECRET;

  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(rawBody).digest("hex"), "utf8");
  const signature = Buffer.from(
    request.headers.get("X-Signature") || "",
    "utf8"
  );

  if (!crypto.timingSafeEqual(digest, signature)) {
    throw new Error("Invalid signature.");
  }
  const data = JSON.parse(rawBody) as unknown;

  if (!webhookHasData(data) || !webhookHasMeta(data)) {
    return new Response("NOT_FOUND", { status: 404 });
  }
  request.log.info("LEMON_WEBHOOK", {
    webhook_data: data,
  });
  await connectMongoose();

  // Save user subscription data to database
  await UserSubscription.findOneAndUpdate(
    { userRef: new Types.ObjectId(data.meta.custom_data.user_id) },
    {
      $set: {
        //  💡 here you can also make isFreePlan true is there is any free trial
        isFreePlan: data.data.attributes.status === "expired",
        type: planDetails.find(
          (e) =>
            e.variantId.toString() ===
            data.data.attributes.variant_id.toString()
        )?.variantName,
        status: data.data.attributes.status,
        renewDate: data.data.attributes.renews_at,
        endDate: data.data.attributes.ends_at,
        subscriptionId: data.data.id,
        variantId: data.data.attributes.variant_id,
      },
    }
  );
  //
  return new Response("OK", { status: 200 });
});
