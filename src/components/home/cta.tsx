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
import Link from "next/link";

export default function CTA() {
  return (
    <Container size="lg">
      <Paper shadow="xl" withBorder p="lg">
        <Stack maw="700" align="center">
          <Title order={1} ta="center">
            Make your website faster <br /> and more reliable with our services.
          </Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            voluptatem, quae, doloremque iure, quod quidem natus quos
            necessitatibus quas doloribus.
          </Text>
          <Group>
            <Button
              component={Link}
              href="/dashboard"
              size="xs"
              leftSection={<IconArrowRight />}
            >
              Get Started Now
            </Button>
            <Button size="xs">Book Call Now</Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
}
