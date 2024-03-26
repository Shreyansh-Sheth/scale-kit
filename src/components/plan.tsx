"use server";

import { planDetails } from "@/lib/config/plan";
import {
  Box,
  Button,
  Divider,
  Group,
  List,
  ListItem,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import PayButton from "./pay-button";

export async function Plan() {
  return (
    <Stack id="pricing">
      <Stack align="center" gap={2}>
        <Title>Pricing</Title>
        <Text>
          With our pricing plans, you can choose the best fit for you.
        </Text>
      </Stack>
      <Group justify="center">
        {planDetails.map((plan) => (
          <Paper key={plan.title} p="md" withBorder>
            <Stack justify="space-between">
              <Title order={3}>{plan.title}</Title>
              <Divider />
              <List component={"ul"}>
                {plan.details.map((detail) => (
                  <ListItem key={detail}>{detail}</ListItem>
                ))}
              </List>
              <Divider />
              <Box>
                <Title order={3}>
                  {plan.pricing}$
                  <Text span size="xs">
                    {" "}
                    / Month
                  </Text>
                </Title>
              </Box>
              <PayButton variantId={plan.variantId}>
                Continue with {plan.title}
              </PayButton>
            </Stack>
          </Paper>
        ))}
      </Group>
    </Stack>
  );
}
