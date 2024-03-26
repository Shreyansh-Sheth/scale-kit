import { Plan } from "@/components/plan";
import connectMongoose from "@/lib/config/mongoose";
import { planDetails } from "@/lib/config/plan";
import { UserSubscription } from "@/lib/schema/userSubscription";
import {
  Alert,
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { format } from "date-fns";
import { getServerSession } from "next-auth";
import { Logger } from "next-axiom";
import { redirect } from "next/navigation";
import { getCustomer, getSubscription } from "@lemonsqueezy/lemonsqueezy.js";
import { lemon } from "@/lib/config/lemon";
import Link from "next/link";
import { authOptions } from "@/lib/config/auth";

export default async function Billing() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  await connectMongoose();
  const billing_data = await UserSubscription.findOne({
    userRef: session.user.id,
  }).lean();

  if (!billing_data) {
    const log = new Logger();
    log.error("BILLING_NOT_FOUND", { session: session });
    await log.flush();
    redirect("/");
  }

  if (billing_data.isFreePlan) {
    return (
      <Container>
        <Stack>
          <Alert title="You are on free plan, please select plan to continue"></Alert>
          <Plan />
        </Stack>
      </Container>
    );
  }
  const currentPlanDetails = planDetails.find(
    (e) => e.variantName === billing_data.type
  );

  lemon();
  const subscriptionData = await getSubscription(billing_data.subscriptionId!);

  return (
    <Stack>
      <Paper p="md">
        <Title order={4}>
          You{"'"}re current plan is {currentPlanDetails?.title}
        </Title>
        <Group justify="space-between">
          <Text>
            {billing_data.endDate
              ? `Ends at ${format(billing_data.endDate, "do LLL, yyy")}`
              : `Renews at ${format(billing_data.renewDate!, "do LLL, yyy")}`}
          </Text>
          <Button
            target="_blank"
            component={Link}
            href={subscriptionData.data?.data.attributes.urls.customer_portal!}
          >
            Manage Subscription
          </Button>
        </Group>
      </Paper>
    </Stack>
  );
}
