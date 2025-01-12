import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Easy Trip API')
    .setDescription('API para gerenciar viagens')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  app.enableCors();
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
