"use server";
import { env } from "@/env";
import { lemon } from "../config/lemon";
import { createCheckout } from "@lemonsqueezy/lemonsqueezy.js";
import { theme } from "@/lib/config/theme";

export async function getCheckoutURL(
  variantId: number,
  embed = false,
  user_id: string,
  email?: string
) {
  const a = lemon();

  // import { createCheckout } from '@lemonsqueezy/lemonsqueezy.js'
  const checkout = await createCheckout(env.LEMONSQUEEZY_STORE_ID!, variantId, {
    checkoutOptions: {
      embed,
      media: false,
      logo: !embed,
      buttonColor: theme.colors[theme.primaryColor][9],
    },
    checkoutData: {
      email: email,
      custom: {
        user_id: user_id,
      },
    },
    productOptions: {
      enabledVariants: [variantId],
      redirectUrl: `${env.NEXT_PUBLIC_APP_URL}/dashboard`,
      receiptButtonText: "Go to Dashboard",
      receiptThankYouNote: "Thank you for signing up to Lemon Stand!",
    },
  });
  return checkout.data?.data.attributes.url;
}
