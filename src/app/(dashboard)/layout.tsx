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
import DashboardNav from "@/components/dashboard-nav";

export default async function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    console.log("No session found");
    return redirect("/auth");
  }

  return <DashboardNav>{children}</DashboardNav>;
}
