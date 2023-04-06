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

const verifyToken = async (token, secretKey) => {
  try {
    const result = verify(token, secretKey);
    return {
      email: result.email,
    };
  } catch (error) {
    return false;
  }
};

export { hashPasssword, verifyPassword, verifyToken };
