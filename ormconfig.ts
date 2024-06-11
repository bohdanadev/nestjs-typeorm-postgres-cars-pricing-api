import * as path from 'node:path';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import getConfigs from './src/config/configs';

dotenv.config({ path: './.env.development' });

const postgresConfig = getConfigs().postgres;

export default new DataSource({
  type: 'postgres',
  host: postgresConfig.host,
  port: postgresConfig.port,
  username: postgresConfig.user,
  password: postgresConfig.password,
  database: postgresConfig.dbName,
  entities: [
    path.join(process.cwd(), 'src', '**', '*.entity.ts'),
  ],
  migrations: [
    path.join(process.cwd(), 'migrations', '*.ts'),
  ],
  synchronize: false,
});