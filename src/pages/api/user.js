import User from "@/models/User";
import { verifyToken } from "@/utils/auth";

export default async function handler(req, res) {
  if (req.method !== "GET") return;

  const { token } = req.cookies;
  const secretKey = process.env.SECRET_KEY;

  if (!token) {
    return res.status(401).json({
      status: "failed",
      message: "your not logged in",
    });
  }

  const result = verifyToken(token, secretKey);

  if (result) {
    const user = await User.findOne({ email: result.email });
    res.status(200).json({
      status: "success",
      data: user,
    });
  } else {
    res.status(401).json({
      status: "failed",
      message: "your unauthorized !",
      data: result,
    });
  }
}
