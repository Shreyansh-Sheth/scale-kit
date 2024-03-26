import Navlink from "@/components/navlink";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Avatar,
  Button,
  Center,
  Group,
  Stack,
  Tabs,
  TabsList,
  TabsTab,
  Title,
} from "@mantine/core";
import {
  IconAnalyze,
  IconCreditCard,
  IconFaceMask,
  IconHome2,
  IconSettings2,
} from "@tabler/icons-react";
import LogoutButton from "../../components/logout";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/config/auth";
import { redirect } from "next/navigation";
import AlertBar from "../../components/alert";

export default async function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/auth");
  }

  return (
    <AppShell
      header={{
        height: 48,
      }}
      navbar={{
        breakpoint: "md",
        width: 300,
      }}
    >
      <AppShellHeader>
        <Center inline h="100%">
          <Title mx="lg" my="auto" order={4}>
            The Kit Logo
          </Title>
        </Center>
      </AppShellHeader>
      <AppShellNavbar>
        <Stack justify="space-between" h={"calc(100vh - 48px)"}>
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
