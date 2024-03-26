import { AppShell, AppShellHeader, AppShellMain, Title } from "@mantine/core";

export default function Web({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppShell header={{ height: 48 }}>
        <AppShellHeader>
          <Title>Saas KIT LOGO</Title>
        </AppShellHeader>
        <AppShellMain>{children}</AppShellMain>
      </AppShell>
    </>
  );
}
