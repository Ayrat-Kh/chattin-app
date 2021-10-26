export const config: Config = {
  apiServer: process.env.NEXT_PUBLIC_API_SERVER as string,
  wssServer: process.env.NEXT_PUBLIC_WSS_SERVER as string,
};

export type Config = {
  apiServer: string;
  wssServer: string;
};
