import { UserSubscription } from "@/lib/schema/userSubscription";
import connectMongoose from "@/lib/config/mongoose";
import { NextApiRequest, NextApiResponse } from "next";

// export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
//   await connectMongo();
//   const users = await userModel.find().lean();
//   return Response.json(users);
// };
