import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") return;

  // connect database
  try {
    await connectDB();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: "failed", message: "Server Error!" });
  }

  // get Data
  const { email, password } = req.body;
  const secretKey = process.env.SECRET_KEY;
  const expiration = 24 * 60 * 60;

  if (!email || !password) {
    return res.status(400).json({ status: "failed", message: "Invalid Data!" });
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res
      .status(422)
      .json({ status: "failed", message: "this user not exists!" });
  }

  const hashPassword = await verifyPassword(password, user.password);

  if (!hashPassword) {
    return res.status(400).json({ status: "failed", message: "Invalid Data!" });
  }

  const token = sign({ email }, secretKey, { expiresIn: expiration });

  res
    .status(200)
    .setHeader(
      "Set-Cookie",
      serialize("token", token, {
        httpOnly: true,
        maxAge: expiration,
        path: "/",
      })
    )
    .json({
      status: "success",
      message: "Logged in!",
      data: { email: user.email },
    });
}
