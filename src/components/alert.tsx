"use client";

import { Alert, Container } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

export default function AlertBar() {
  return (
    <Suspense>
      <AlertDisplay />
    </Suspense>
  );
}

export function AlertDisplay() {
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
