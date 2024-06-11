import * as process from 'node:process';

type Config = {
    postgres: PostgresConfig;

  };
  
 type PostgresConfig = {
    host: string;
    port: number;
    user: string;
    password: string;
    dbName: string;
  };
  
export default (): Config => ({
  postgres: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT) || 5432,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    dbName: process.env.POSTGRES_DB,
  },
});