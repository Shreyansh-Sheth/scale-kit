"use client";

import { Box, Select } from "@mantine/core";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const links = [
  {
    label: "Technologies",
    value: "/docs",
  },
  {
    label: "Getting Started",
    value: "/docs/run-in-local",
  },
  {
    label: "Theming",
    value: "/docs/theming",
  },
  {
    label: "Setup Payments",
    value: "/docs/payment",
  },
  {
    label: "Deployment",
    value: "/docs/deployment",
  },
  {
    label: "Third Party Documentation",
    value: "/docs/third-party",
  },
];
export default function DocsNav() {
  const router = useRouter();

  const pathname = usePathname();
  const [currentValue, setCurrentValue] = useState(pathname);
  return (
    <Box my="lg">
      <Select
        onChange={(value) => {
          if (!value) return;
          router.push(value);
          setCurrentValue(value);
        }}
        value={currentValue}
        label="Explore Docs"
        data={links}
      ></Select>
    </Box>
  );
}
