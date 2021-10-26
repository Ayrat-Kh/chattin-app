export const config: Config = {
  apiServer: process.env.API_SERVER as string,
  wssServer: process.env.WSS_SERVER as string,
};

export type Config = {
  apiServer: string;
  wssServer: string;
};
