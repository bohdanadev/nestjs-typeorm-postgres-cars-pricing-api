import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { setupApp } from './setup-app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupApp(app);

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT');
  await app.listen(PORT);
}
bootstrap();
