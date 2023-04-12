import { model, Schema, models } from "mongoose";

const MessageSchema = new Schema(
  {
    data: [
      {
        role: String,
        content: String,
      },
    ],
    ip: String,
  },
  {
    timestamps: true,
  }
);

export default models.Message || model("Message", MessageSchema);
