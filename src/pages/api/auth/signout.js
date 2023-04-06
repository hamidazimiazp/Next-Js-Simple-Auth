import { serialize } from "cookie";

export default async function handler(req, res) {
  // return if req is not GET
  if (req.method !== "GET") return;

  const serialized = serialize("token", "", { path: "/", maxAge: 0 });
  res.status(200).setHeader("Set-Cookie", serialized).json({
    status: "success",
    message: "logout successfully!",
  });
}
