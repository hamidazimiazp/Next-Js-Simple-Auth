import User from "@/models/User";
import { hashPasssword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method !== "POST") return;

  // connect database
  try {
    await connectDB();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: "failed", message: "Server Error!" });
  }

  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword || password !== confirmPassword) {
    return res.status(400).json({ status: "failed", message: "Invalid Data!" });
  }

  const hashPassword = await hashPasssword(password);

  const user = await User.create({
    email: email,
    password: hashPassword,
    fullName: "",
    bio: "",
  });

  res.status(201).json({ status: "success", message: "Created!", data: user });
}
