export const getCredentialsFromENV = () => {
  return {
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
  };
};
