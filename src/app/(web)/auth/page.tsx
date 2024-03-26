import {
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import LoginWithGoogle from "./google";
import LoginWithMagicLink from "./email";

export default function AuthenticationTitle() {
  return (
    <Container size={420} my={40}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Stack>
          <Stack gap={0}>
            <Title order={3}>Get Started</Title>
            <Text size="Xs" c="dimmed">
              Add your credentials to continue
            </Text>
          </Stack>
          <LoginWithMagicLink />
          <Divider />
          <LoginWithGoogle />
        </Stack>
      </Paper>
    </Container>
  );
}
