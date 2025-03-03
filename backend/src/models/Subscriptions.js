import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
  subscriber: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  channel: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  created_at: { type: Date, default: Date.now }
});

export const Subscription = mongoose.model("Subscriptions", SubscriptionSchema);
