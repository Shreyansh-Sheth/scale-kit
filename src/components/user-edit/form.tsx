"use client";

import { updateUser } from "@/lib/actions/user";
import { updateUserValidation } from "@/lib/validation/user";
import { Stack, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import SubmitButton from "../submit-button";

export default function UpdateUserForm({
  name,
  email,
}: {
  name?: string;
  email: string;
}) {
  const { getInputProps, onSubmit, validate } = useForm<
    z.infer<typeof updateUserValidation>
  >({
    validate: zodResolver(updateUserValidation),
    initialValues: {
      name: name || "",
    },
  });

  const submitAction = (data: FormData) => {
    const result = validate();
    if (result.hasErrors) {
      return;
    }
    updateUser(data);
  };

  return (
    <form action={submitAction}>
      <Stack>
        <TextInput
          name="name"
          placeholder="User Name"
          {...getInputProps("name")}
        />
        <TextInput defaultValue={email} name="default-email" disabled />
        <SubmitButton>Update User</SubmitButton>
      </Stack>
    </form>
  );
}
