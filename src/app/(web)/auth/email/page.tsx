import {
  ActionIcon,
  Button,
  Center,
  Container,
  Divider,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconArrowLeft, IconMail } from "@tabler/icons-react";
import Link from "next/link";

export default function EmailCheck() {
  return (
    <Container size={420} my={40}>
      <Paper withBorder p="md">
        <Button
          component={Link}
          variant="transparent"
          leftSection={<IconArrowLeft />}
          href={"/auth"}
        >
          Go Back
        </Button>
        <Divider my="lg" />
        <Stack gap={1}>
          <Center>
            <ThemeIcon size="lg" variant="transparent">
              <IconMail />
            </ThemeIcon>
          </Center>
          <Title order={5} ta="center">
            Check your email
          </Title>
          <Text size="xs" ta="center" c="dimmed">
            A sign in link has been sent to your email address.
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
}
