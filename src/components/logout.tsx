"use client";

import { Button } from "@mantine/core";
import { signOut, useSession } from "next-auth/react";

export default function LogoutButton() {
  return (
    <Button
      onClick={async () => {
        await signOut({
          callbackUrl: "/",
        });
      }}
      variant="light"
      color="red"
    >
      Logout
    </Button>
  );
}
