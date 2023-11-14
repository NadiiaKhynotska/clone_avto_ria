import { Document } from "mongoose";

import { EAccountStatus } from "../enums/EAccountStatus";
import { EGenders } from "../enums/EGenders";
import { EUsersStatus } from "../enums/EUserStatus";

export interface IUser extends Document {
  name?: string;
  age?: number;
  genders?: EGenders;
  email: string;
  password: string;
  userStatus: EUsersStatus;
  acсountStatus: EAccountStatus;
  avatar: string;
}

export type IUserCredentials = Pick<IUser, "email" | "password">; //take only 'email' and 'password ' from interface IUser
// export type IUserCredentials = Omit<IUser, "email" | "password">; //take all fields except password and email
