"use client";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Burger,
  Button,
  Group,
  Stack,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import Footer from "./footer";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: {
          base: 300,
          sm: 0,
          // lg: 0,
        },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShellHeader>
        <Group h="100%" px="lg" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Link passHref href="/">
            <Title>Scale-kit </Title>
          </Link>
          <Group visibleFrom="sm">
            <Button variant="transparent" component={Link} href="/#faq">
              FAQ
            </Button>
            <Button variant="transparent" component={Link} href="/#pricing">
              Pricing
            </Button>
            <Button variant="transparent" component={Link} href="/docs">
              Docs
            </Button>
          </Group>
          <Group visibleFrom="sm">
            <Button component={Link} href={"/dashboard"}>
              Get Started
            </Button>
          </Group>
        </Group>
      </AppShellHeader>
      <AppShellNavbar hiddenFrom="sm">
        <Stack p="md" justify="space-between" h="90vh">
          <Stack>
            <Button component={Link} href="#faq">
              FAQ
            </Button>
            <Button component={Link} href="#pricing">
              Pricing
            </Button>
            <Button component={Link} href="#support ">
              Support
            </Button>
          </Stack>
          <Button component={Link} href={"/dashboard"}>
            Get Started
          </Button>
        </Stack>
      </AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
