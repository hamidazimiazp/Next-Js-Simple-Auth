import { hash } from "bcryptjs";

const hashPasssword = async (password) => {
  const newPass = await hash(password, 12);
  return newPass;
};

export { hashPasssword };
