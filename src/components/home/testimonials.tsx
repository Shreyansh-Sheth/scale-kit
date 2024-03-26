"use client";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import {
  Box,
  Container,
  Divider,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconQuote } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function Testimonials() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <Container>
      <Stack gap={25}>
        <Stack align="center" gap={4}>
          <Title order={2}>Testimonials</Title>
          <Text c="dimmed">What our customers have to say about us.</Text>
        </Stack>
        <Carousel
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          withControls={false}
          withIndicators
          draggable
          height={200}
        >
          {[...new Array(3)].map((_, idx) => (
            <CarouselSlide key={idx}>
              <Stack>
                <Title order={4}>
                  <ThemeIcon variant="transparent" mr="md">
                    <IconQuote />
                  </ThemeIcon>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. At
                  aliquid quos eius possimus reiciendis. Accusantium vel
                  similique fugiat, consequatur cupiditate ipsam asperiores
                  voluptatem! Ratione praesentium dolor deleniti corporis
                  exercitationem ad?
                </Title>
                <Divider />
                <Stack gap={2}>
                  <Text size={"xl"} fw="bold">
                    Shreyansh Sheth
                  </Text>
                  <Text size={"xs"}>Someone from github</Text>
                </Stack>
              </Stack>
            </CarouselSlide>
          ))}{" "}
        </Carousel>
      </Stack>
    </Container>
  );
}
