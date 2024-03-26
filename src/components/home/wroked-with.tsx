import { Group, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";

export default function WorkedWith() {
  return (
    <Stack justify="center" align="center">
      <Text>We have worked with some of the best companies in the world.</Text>
      <Group>
        {[...new Array(5)].map((_, idx) => (
          <Title key={idx}>Google</Title>
        ))}
      </Group>
    </Stack>
  );
}
