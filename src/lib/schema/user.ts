import { InferSchemaType, Model, Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
});

export const userModel: Model<InferSchemaType<typeof userSchema>> =
  models.User ?? model("User", userSchema);
