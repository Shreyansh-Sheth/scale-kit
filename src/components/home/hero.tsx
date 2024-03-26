import { Button, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight, IconVideo } from "@tabler/icons-react";
import { Prata } from "next/font/google";

const displayFonts = Prata({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <Stack mt="lg" p="md" h="80vh" align="center" justify="center">
      <Title size={52} className={displayFonts.className}>
        Deploy your projects <br />{" "}
        <Text c="grape" span inherit>
          100x
        </Text>{" "}
        faster with us
      </Title>
      <Text maw={500}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quo
        eligendi nulla officia perferendis pariatur odio! Illo iure temporibus
        amet voluptas
      </Text>
      <Group>
        <Button leftSection={<IconArrowRight />}>Get Started</Button>
        <Button variant="light" leftSection={<IconVideo />}>
          Watch Video
        </Button>
      </Group>
    </Stack>
  );
}
