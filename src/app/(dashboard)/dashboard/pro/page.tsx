import { verifyUserPlan } from "@/lib/actions/check-plans";
import { Container, Text } from "@mantine/core";
export const revalidate = 10;
export default async function Pro() {
  await verifyUserPlan("PRO", "ENTER NOW");

  return (
    <Container>
      <Text>Only PRO Plan Person Can Access This Page</Text>
    </Container>
  );
}
