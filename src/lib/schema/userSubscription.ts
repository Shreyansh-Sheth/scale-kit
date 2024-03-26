import { planDetails } from "@/lib/config/plan";
import mongoose, {
  InferSchemaType,
  Model,
  Schema,
  Types,
  mongo,
} from "mongoose";

const userSubscriptionSchema = new Schema({
  userRef: {
    type: Types.ObjectId,
    ref: "users",
  },
  isFreePlan: {
    type: Boolean,
    default: true,
  },
  subscriptionId: {
    type: String,
  },
  status: {
    type: String,
  },
  type: {
    type: String,
    enum: planDetails.map((e) => e.variantName),
  },
  variantId: {
    type: String,
  },
  renewDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
});

export const UserSubscription: Model<
  InferSchemaType<typeof userSubscriptionSchema>
> =
  mongoose.models.UserSubscription ??
  mongoose.model("UserSubscription", userSubscriptionSchema);
