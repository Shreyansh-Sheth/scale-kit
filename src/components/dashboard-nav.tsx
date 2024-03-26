"use client";
import {
  AppShell,
  AppShellHeader,
  Center,
  Title,
  AppShellNavbar,
  Stack,
  AppShellMain,
  Burger,
} from "@mantine/core";
import { IconHome2, IconAnalyze, IconSettings2 } from "@tabler/icons-react";
import AlertBar from "./alert";
import LogoutButton from "./logout";
import Navlink from "./navlink";
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function DashboardNav({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();

  // listed to route change and close the navbar
  const pathname = usePathname();

  useEffect(() => {
    if (opened) {
      toggle();
    }
  }, [pathname]);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: {
          base: 300,
          sm: 300,
          // lg: 0,
        },
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShellHeader>
        <Center inline h="100%">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title mx="lg" my="auto" order={4}>
            The Kit Logo
          </Title>
        </Center>
      </AppShellHeader>
      <AppShellNavbar>
        <Stack justify="space-between" h={"calc(100vh - 60px)"}>
          <Stack p="md">
            <Navlink href="/dashboard" leftSection={<IconHome2 size={16} />}>
              Dashboard
            </Navlink>
            <Navlink
              href="/dashboard/pro"
              leftSection={<IconAnalyze size={16} />}
            >
              Pro
            </Navlink>
            <Navlink
              href="/dashboard/setting"
              leftSection={<IconSettings2 size={16} />}
            >
              Settings
            </Navlink>
          </Stack>
          <Stack p="md">
            <LogoutButton />
          </Stack>
        </Stack>
      </AppShellNavbar>
      <AppShellMain>
        <AlertBar />
        {children}
      </AppShellMain>
    </AppShell>
  );
}
