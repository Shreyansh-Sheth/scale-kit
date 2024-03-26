"use client";
import { Button, ButtonProps } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({
  href,
  ...otherProps
}: {
  href: string;
} & ButtonProps) {
  const pathname = usePathname();

  return (
    <Button
      variant={pathname === href ? "filled" : "transparent"}
      component={Link}
      href={href}
      justify="start"
      {...otherProps}
    ></Button>
  );
}
