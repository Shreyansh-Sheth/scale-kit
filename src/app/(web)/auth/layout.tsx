import Navbar from "@/components/home/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Navbar>{children}</Navbar>;
}
