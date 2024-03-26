"use server";
import { getServerSession } from "next-auth";
import { userModel } from "../schema/user";
import { authOptions } from "../config/auth";
import { z } from "zod";
import { updateUserValidation } from "../validation/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getUser = async () => {
  const session = await getServerSession(authOptions);
  const user = await userModel.findById(session?.user.id).lean();
  if (!user) {
    redirect("/");
  }
  return user;
};

export const updateUser = async (data: FormData) => {
  const fields = updateUserValidation.safeParse({
    name: data.get("name"),
  });
  if (!fields.success) {
    return {
      errors: fields.error.flatten().fieldErrors,
    };
  }

  const session = await getServerSession(authOptions);
  const user = await userModel.findByIdAndUpdate(session?.user.id, {
    name: fields.data.name,
  });
  revalidatePath("/dashboard/setting");
  return {
    user,
  };
};
