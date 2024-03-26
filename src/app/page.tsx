import { Button, Stack } from "@mantine/core";
import "@mantine/carousel/styles.css";
import Image from "next/image";
import { Plan } from "../components/plan";
import Navbar from "@/components/home/nav";
import Hero from "@/components/home/hero";
import WorkedWith from "@/components/home/wroked-with";
import Features from "@/components/home/features";
import Testimonials from "@/components/home/testimonials";
import Faq from "@/components/home/faq";
import CTA from "@/components/home/cta";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <Navbar>
      <Stack gap={200}>
        <Hero />
        <WorkedWith />
        <Features />
        <Testimonials />
        <Faq />
        <CTA />
        <Footer />
      </Stack>
    </Navbar>
  );
}
