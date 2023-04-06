import { compare, hash } from "bcryptjs";
import { verify } from "jsonwebtoken";

const hashPasssword = async (password) => {
  const newPass = await hash(password, 12);
  return newPass;
};

const verifyPassword = async (password, hashPass) => {
  const isValid = await compare(password, hashPass);
  return isValid;
};

const verifyToken = (token, secretKey) => {
  try {
    const result = verify(token, secretKey);
    return {
      email: result.email,
    };
  } catch (error) {
    return false;
  }
};

const loggedIn = async () => {
  const res = await fetch("/api/user");
  const data = await res.json();

  if (data.status === "success") {
    return true;
  } else {
    return false;
  }
};

export { hashPasssword, verifyPassword, verifyToken, loggedIn };
