import { getUser, updateUser } from "@/lib/actions/user";
import { Divider, Paper, Stack, TextInput, Title } from "@mantine/core";
import SubmitButton from "@/components/submit-button";
import UpdateUserForm from "./form";

export default async function UserEdit() {
  const user = await getUser();
  return (
    <Paper p="md" withBorder>
      <Stack>
        <Title order={2}>User Edit</Title>
        <Divider />
        <UpdateUserForm email={user?.email} name={user?.name ?? ""} />
      </Stack>
    </Paper>
  );
}
