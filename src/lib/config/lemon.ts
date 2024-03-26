"use server";
import { env } from "@/env";
import { lemonSqueezySetup } from "@lemonsqueezy/lemonsqueezy.js";

export const lemon = () =>
  lemonSqueezySetup({
    apiKey: env.LEMONSQUEEZY_API_KEY,
  });
