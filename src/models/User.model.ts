import { model, Schema } from "mongoose";

import { EAccountStatus } from "../enums/EAccountStatus";
import { EGenders } from "../enums/EGenders";
import { EUsersStatus } from "../enums/EUserStatus";
import { IUser } from "../types/user.type";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
      max: [199, "Maximum age  is 199"],
      min: [18, "Minimum age is 18"],
    },
    genders: {
      type: String,
      enum: EGenders,
    },
    userStatus: {
      type: String,
      enum: EUsersStatus,
      default: EUsersStatus.inactive,
      required: true,
    },
    acсountStatus: {
      type: String,
      enum: EAccountStatus,
      default: EAccountStatus.base,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      select: false,
      required: true,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const User = model<IUser>("user", userSchema);
