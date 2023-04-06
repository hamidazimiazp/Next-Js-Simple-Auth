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
      .json({ status: "Failde!", message: "Server Error !" });
  }

  const { email, password, confirmPassword } = req.body;
}
