"use client";

import { Button } from "@mantine/core";
import { IconBrandGoogleFilled } from "@tabler/icons-react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginWithGoogle() {
  const { get } = useSearchParams();

  return (
    <Button
      variant="outline"
      onClick={() => {
        const callbackUrl = get("callbackUrl");
        signIn("google", {
          callbackUrl:
            typeof callbackUrl === "string" ? callbackUrl : "/dashboard",
          redirect: true,
        });
      }}
      leftSection={<IconBrandGoogleFilled size={14} />}
    >
      Continue With Google
    </Button>
  );
}
