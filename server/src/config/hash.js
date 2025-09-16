import bcrypt from "bcrypt";

const saltRounds = Number(process.env.SALT_ROUNDS) || 10;

export const GetHash = async (string) => {
  const hash = await bcrypt.hash(string, saltRounds);
  return hash;
};

export const MatchHash = async (string, hash) => {
  const match = await bcrypt.compare(string, hash);
  return match;
};
