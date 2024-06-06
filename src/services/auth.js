import bcrypt from "bcryptjs";

export const createPasswordHash = async (password) => {
  const hash = await bcrypt.hash(password, 8);
  return hash;
};


export const checkPassword = (user, password) => {
  const compare = bcrypt.compare(password, user.password);
  return compare;
}