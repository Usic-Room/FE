interface EnvFunction {
  (key: string, defaultValue?: string | boolean): string | boolean;
}

export default ({ env }: { env: EnvFunction }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET") as string,
  },
  apiToken: {
    salt: env("API_TOKEN_SALT") as string,
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT") as string,
    },
  },
  flags: {
    nps: env("FLAG_NPS", true) as boolean,
    promoteEE: env("FLAG_PROMOTE_EE", true) as boolean,
  },
});
