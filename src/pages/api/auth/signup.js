import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export default async function handler(req, res) {
  if (req.method !== "POST") return;

  // connect database
  try {
    await connectDB();
  } catch (error) {
    console.log(error.message);
    return res
      .status(500)
      .json({ status: "Failed!", message: "Server Error !" });
  }

  const { email, password, confirmPassword } = req.body;

  if (!email || !password || confirmPassword || password !== confirmPassword) {
    return res
      .status(400)
      .json({ status: "Failed!", message: "Invalid Data !" });
  }

  const user = await User.create({
    email: email,
    password: password,
    fullName: "",
    bio: "",
  });

  res.status(201).json({ status: "Success!", message: "Created", data: user });
}
