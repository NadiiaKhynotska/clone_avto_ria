import express, { NextFunction, Request, Response } from "express";
import fileUpload from "express-fileupload";
import * as mongoose from "mongoose";

import { configs } from "./configs/configs";
import { authRouter } from "./routers/auth.router";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// app.use("/users", userRouter);
app.use("/auth", authRouter);
// app.use("/cars", carRouter);
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(err.status || 500).json({
    message: err.message,
    status: err.status,
  });
});

app.listen(configs.PORT, async () => {
  await mongoose.connect(configs.DB_URI);
  console.log(`server has successfully started on port ${configs.PORT}`);
});
