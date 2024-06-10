import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        if (configService.get<string>('DATABASE_URL')) {
          return {
            type: 'postgres',
            url: configService.get<string>('DATABASE_URL'),
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
          };
        } else {
          return {
            type: 'postgres',
            database: configService.get<string>('POSTGRES_DB'),
            host: configService.get<string>('POSTGRES_HOST'),
            port: configService.get<number>('POSTGRES_PORT'),
            username: configService.get<string>('POSTGRES_USER'),
            password: configService.get<string>('POSTGRES_PASSWORD'),
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
          };
        }
      },
    }),
 
  //  TypeOrmModule.forRootAsync({
  //    inject: [ConfigService],
  //    useFactory: (config: ConfigService) => {
  //      return {
  //        type: 'sqlite',
  //        database: config.get<string>('DB_NAME'),
  //        synchronize: true,
  //        entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //      };
  //    },
  //  }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [],
  providers: [
    AppService,
  ],
})

export class AppModule {};