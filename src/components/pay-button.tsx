"use client";

import { getCheckoutURL } from "@/lib/actions/get-checkout";
import { Button, ButtonProps } from "@mantine/core";
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";

import { useEffect } from "react";

declare global {
  interface Window {
    createLemonSqueezy: () => void;
  }
}

export default function PayButton({
  variantId,
  ...otherProps
}: { variantId: string } & ButtonProps) {
  const session = useSession();
  useEffect(() => {
    if (typeof window.createLemonSqueezy === "function") {
      window.createLemonSqueezy();
    }
  }, []);

  const checkout = async () => {
    if (session.status === "unauthenticated" || session.status === "loading") {
      signIn(undefined, {
        callbackUrl: `/dashboard/setting/${variantId}`,
      });
      return;
    }
    if (
      session.data?.user.id === undefined ||
      session.data?.user.email === undefined
    ) {
      return;
    }
    const url = await getCheckoutURL(
      Number(variantId),
      false,
      session.data?.user?.id,
      session.data?.user?.email ?? undefined
    );
    if (url === undefined) {
      return;
    }

    window.location.href = url;
  };

  return <Button {...otherProps} onClick={checkout} />;
}
