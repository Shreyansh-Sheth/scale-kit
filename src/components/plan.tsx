"use server";

import { planDetails } from "@/lib/config/plan";
import { Button, Divider, Group, Paper, Stack, Title } from "@mantine/core";
import PayButton from "./pay-button";

export async function Plan() {
  return (
    <Group>
      {planDetails.map((plan) => (
        <Paper key={plan.title} p="md" withBorder>
          <Stack justify="space-between" gap={2}>
            <Title>{plan.title}</Title>
            <Title order={3}>{plan.pricing}</Title>
            <Divider />
            <Stack component={"ul"}>
              {plan.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </Stack>
            <PayButton variantId={plan.variantId}>
              Continue with {plan.title}
            </PayButton>
          </Stack>
        </Paper>
      ))}
    </Group>
  );
}
