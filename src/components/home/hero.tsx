import { AspectRatio, Button, Group, Stack, Text, Title } from "@mantine/core";
import { IconArrowRight, IconVideo } from "@tabler/icons-react";
import { Prata } from "next/font/google";
import { YouTubeEmbed } from "@next/third-parties/google";

const displayFonts = Prata({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <Stack mt={120} p="md" h="80vh" align="center" justify="center">
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
      <Group mb={70}>
        <Button leftSection={<IconArrowRight />}>Get Started</Button>
        <Button variant="light" leftSection={<IconVideo />}>
          Watch Video
        </Button>
      </Group>
      <YouTubeEmbed width={700} videoid="EE-xtCF3T94" params="controls=0" />
    </Stack>
  );
}
