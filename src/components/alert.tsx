"use client";

import { Alert, Container } from "@mantine/core";
import { useSearchParams } from "next/navigation";

export default function AlertBar() {
  const searchParams = useSearchParams();

  if (searchParams.get("alert")) {
    return (
      <Container size={"lg"} my="md">
        <Alert color="red">{searchParams.get("alert")}</Alert>
      </Container>
    );
  }

  return <></>;
}
