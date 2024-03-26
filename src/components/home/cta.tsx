import {
  Box,
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

export default function CTA() {
  return (
    <Container size="lg">
      <Paper maw="700" shadow="xl" withBorder p="md">
        <Stack align="center" gap={70}>
          <Title order={1} ta="center">
            Make your website faster <br /> and more reliable with our services.
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            voluptatem, quae, doloremque iure, quod quidem natus quos
            necessitatibus quas doloribus.
          </Text>
          <Group>
            <Button leftSection={<IconArrowRight />}>Get Started Now</Button>
            <Button>Book Call Now</Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
}
