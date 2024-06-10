import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import * as path from 'node:path';
config({
  path: `.env.${process.env.NODE_ENV}`,
});

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get<string>('POSTGRES_HOST'),
  port: configService.get<number>('POSTGRES_PORT'),
  username: configService.get<string>('POSTGRES_USER'),
  password: configService.get<string>('POSTGRES_PASSWORD'),
  database: configService.get<string>('POSTGRES_DB'),
  logging: configService.get<boolean>('DB_LOGGING'),
  entities: [
    path.join(process.cwd(), 'src', '*', '*.entity.ts'),
  ],
  migrations: [
    path.join(process.cwd(), 'src', 'database', 'migrations', '*.ts'),
  ],
});