import { Container, Divider, Stack, Title } from "@mantine/core";
import Billing from "../../../../components/billing";
import UserEdit from "@/components/user-edit";

export default function Settings() {
  return (
    <Container mt="lg">
      <Stack>
        <Title order={3}>Settings</Title>
        <Divider />
        <Billing />
        <UserEdit />
      </Stack>
    </Container>
  );
}
