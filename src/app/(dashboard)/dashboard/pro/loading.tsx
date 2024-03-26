import { Container, Loader, Skeleton, Stack } from "@mantine/core";

export default function Loading() {
  return (
    <Container my="lg">
      <Stack>
        <Skeleton height={180} />
        <Skeleton height={20} />
        <Skeleton height={20} />
      </Stack>
    </Container>
  );
}
