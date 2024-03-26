import { authOptions } from "@/lib/config/auth";
import { Button, Container, Stack, Title } from "@mantine/core";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <Stack p="md">
      <Title>Hello Shreyansh,</Title>
    </Stack>
  );
}
