import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema(
    {
    custGuId : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },

    productId: {
      type: Number,
      required: true,
    },

    },

    {
    timestamps: true,
    },

);

export const wishlistModel = mongoose.model(
  "wishlist",
  wishlistSchema
);
