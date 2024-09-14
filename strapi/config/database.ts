import path from "path";

interface EnvFunction {
  (key: string, defaultValue?: string | number | boolean):
    | string
    | number
    | boolean
    | undefined;
}

type DatabaseClient = "mysql" | "mysql2" | "postgres" | "sqlite"; // Define the possible clients

// Utility functions for type conversions
const toInt = (value: string | undefined, defaultValue: number): number => {
  return value ? parseInt(value, 10) : defaultValue;
};

const toBool = (value: string | undefined, defaultValue: boolean): boolean => {
  return value !== undefined ? value === "true" : defaultValue;
};

export default ({ env }: { env: EnvFunction }) => {
  const client = env("DATABASE_CLIENT", "sqlite") as DatabaseClient; // Explicitly type `client`

  const connections: Record<DatabaseClient, any> = {
    mysql: {
      connection: {
        connectionString: env("DATABASE_URL") as string,
        host: env("DATABASE_HOST", "localhost") as string,
        port: toInt(env("DATABASE_PORT", "3306") as string, 3306), // Convert to integer
        database: env("DATABASE_NAME", "strapi") as string,
        user: env("DATABASE_USERNAME", "strapi") as string,
        password: env("DATABASE_PASSWORD", "strapi") as string,
        ssl: toBool(env("DATABASE_SSL", "false") as string, false) && {
          key: env("DATABASE_SSL_KEY", undefined) as string | undefined,
          cert: env("DATABASE_SSL_CERT", undefined) as string | undefined,
          ca: env("DATABASE_SSL_CA", undefined) as string | undefined,
          capath: env("DATABASE_SSL_CAPATH", undefined) as string | undefined,
          cipher: env("DATABASE_SSL_CIPHER", undefined) as string | undefined,
          rejectUnauthorized: toBool(
            env("DATABASE_SSL_REJECT_UNAUTHORIZED", "true") as string,
            true
          ),
        },
      },
      pool: {
        min: toInt(env("DATABASE_POOL_MIN", "2") as string, 2),
        max: toInt(env("DATABASE_POOL_MAX", "10") as string, 10),
      }, // Convert to integer
    },
    mysql2: {
      connection: {
        host: env("DATABASE_HOST", "localhost") as string,
        port: toInt(env("DATABASE_PORT", "3306") as string, 3306), // Convert to integer
        database: env("DATABASE_NAME", "strapi") as string,
        user: env("DATABASE_USERNAME", "strapi") as string,
        password: env("DATABASE_PASSWORD", "strapi") as string,
        ssl: toBool(env("DATABASE_SSL", "false") as string, false) && {
          key: env("DATABASE_SSL_KEY", undefined) as string | undefined,
          cert: env("DATABASE_SSL_CERT", undefined) as string | undefined,
          ca: env("DATABASE_SSL_CA", undefined) as string | undefined,
          capath: env("DATABASE_SSL_CAPATH", undefined) as string | undefined,
          cipher: env("DATABASE_SSL_CIPHER", undefined) as string | undefined,
          rejectUnauthorized: toBool(
            env("DATABASE_SSL_REJECT_UNAUTHORIZED", "true") as string,
            true
          ),
        },
      },
      pool: {
        min: toInt(env("DATABASE_POOL_MIN", "2") as string, 2),
        max: toInt(env("DATABASE_POOL_MAX", "10") as string, 10),
      }, // Convert to integer
    },
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL") as string,
        host: env("DATABASE_HOST", "localhost") as string,
        port: toInt(env("DATABASE_PORT", "5432") as string, 5432), // Convert to integer
        database: env("DATABASE_NAME", "strapi") as string,
        user: env("DATABASE_USERNAME", "strapi") as string,
        password: env("DATABASE_PASSWORD", "strapi") as string,
        ssl: toBool(env("DATABASE_SSL", "false") as string, false) && {
          key: env("DATABASE_SSL_KEY", undefined) as string | undefined,
          cert: env("DATABASE_SSL_CERT", undefined) as string | undefined,
          ca: env("DATABASE_SSL_CA", undefined) as string | undefined,
          capath: env("DATABASE_SSL_CAPATH", undefined) as string | undefined,
          cipher: env("DATABASE_SSL_CIPHER", undefined) as string | undefined,
          rejectUnauthorized: toBool(
            env("DATABASE_SSL_REJECT_UNAUTHORIZED", "true") as string,
            true
          ),
        },
        schema: env("DATABASE_SCHEMA", "public") as string,
      },
      pool: {
        min: toInt(env("DATABASE_POOL_MIN", "2") as string, 2),
        max: toInt(env("DATABASE_POOL_MAX", "10") as string, 10),
      }, // Convert to integer
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          "..",
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db") as string
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client], // Properly typed client here
      acquireConnectionTimeout: toInt(
        env("DATABASE_CONNECTION_TIMEOUT", "60000") as string,
        60000
      ), // Convert to integer
    },
  };
};
