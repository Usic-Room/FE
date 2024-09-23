interface EnvFunction {
  (key: string, defaultValue?: string | number | boolean):
    | string
    | number
    | boolean
    | undefined;
  int(key: string, defaultValue?: number): number;
  bool(key: string, defaultValue?: boolean): boolean;
  array(key: string): string[];
}

export default ({ env }: { env: EnvFunction }) => ({
  host: env("HOST", "0.0.0.0") as string,
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
