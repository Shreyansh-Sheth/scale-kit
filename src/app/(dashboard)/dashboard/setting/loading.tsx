import { Container, Skeleton } from "@mantine/core";

export default function Loading() {
  return (
    <Container my="lg">
      <Skeleton h="500px"></Skeleton>
    </Container>
  );
}
