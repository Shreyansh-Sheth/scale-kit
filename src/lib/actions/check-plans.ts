"use server";
import { planDetails } from "@/lib/config/plan";
import { getServerSession } from "next-auth";
import { authOptions } from "../config/auth";
import { redirect } from "next/navigation";
import { UserSubscription } from "../schema/userSubscription";
import { Types } from "mongoose";
type PlanNameType = (typeof planDetails)[number]["variantName"] | "FREE";

export const verifyUserPlan = async (...planName: PlanNameType[]) => {
  // 🚀 You can use this function to restrict api / pages access for user

  const loggedInUserSession = await getServerSession(authOptions);

  if (!loggedInUserSession || !loggedInUserSession.user) {
    redirect("/");
  }
  const userPlan = await UserSubscription.findOne({
    userRef: new Types.ObjectId(loggedInUserSession.user.id),
  });

  if (!userPlan) {
    redirect("/");
  }
  if (planName.includes("FREE")) {
    // it's free access place so user can easily access it
    return;
  }

  if (!userPlan.type || !planName.includes(userPlan.type)) {
    redirect(
      `/dashboard/setting?alert=${encodeURIComponent(
        "Please change plan to access features."
      )}`
    );
  }
  return;
};
