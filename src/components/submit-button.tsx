"use client";

import { Button, ButtonProps } from "@mantine/core";
import { useFormStatus } from "react-dom";

export default function SubmitButton(props: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" loading={pending} disabled={pending} {...props} />
  );
}
