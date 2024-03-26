import {
  AppShellFooter,
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function Footer() {
  return (
    <Paper withBorder p="md" bg="gray">
      <Group justify="space-between">
        <Title>Scale-DEV</Title>
        <Stack>
          <Text>Saas starter kit</Text>
        </Stack>
      </Group>
    </Paper>
  );
}
