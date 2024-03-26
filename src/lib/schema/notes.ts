import mongoose, { InferSchemaType, Model, Schema, Types } from "mongoose";

const notesSchema = new Schema({
  userRef: {
    type: Types.ObjectId,
    ref: "users",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
});

export const notesModel: Model<InferSchemaType<typeof notesSchema>> =
  mongoose.models.Notes ?? mongoose.model("Notes", notesSchema);
