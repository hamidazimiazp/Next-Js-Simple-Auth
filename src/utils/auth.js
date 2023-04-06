import { compare, hash } from "bcryptjs";

const hashPasssword = async (password) => {
  const newPass = await hash(password, 12);
  return newPass;
};

const verifyPassword = async (password, hashPass) => {
  const isValid = await compare(password, hashPass);
  return isValid;
};

export { hashPasssword, verifyPassword };
