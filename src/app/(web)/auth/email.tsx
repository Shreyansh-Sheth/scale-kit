"use client";
import { Alert, Button, Container, Stack, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import { z } from "zod";

const validation = z.object({
  email: z.string().email(),
});

export default function LoginWithMagicLink() {
  const form = useForm({
    validate: zodResolver(validation),
  });
  const { get } = useSearchParams();

  const submit = form.onSubmit(async (data) => {
    const callbackUrl = get("callbackUrl");
    await signIn("email", {
      email: data.email,
      callbackUrl: typeof callbackUrl === "string" ? callbackUrl : "/dashboard",
    });
  });

  return (
    <form onSubmit={submit}>
      <Stack>
        <TextInput
          {...form.getInputProps("email")}
          label="Email"
          placeholder="you@email.com"
          required
        />
        <Button type="submit" fullWidth>
          Continue With Email
        </Button>
      </Stack>
    </form>
  );
}
