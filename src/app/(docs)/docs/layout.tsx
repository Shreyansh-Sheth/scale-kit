import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Box,
  Container,
  Menu,
  Select,
  Stack,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import Navbar from "@/components/home/nav";
import Link from "next/link";
import { link } from "fs";
import { redirect } from "next/navigation";
import DocsNav from "./docs-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Navbar>
      <Container>
        <DocsNav />
        <TypographyStylesProvider>{children}</TypographyStylesProvider>
      </Container>
    </Navbar>
  );
}
