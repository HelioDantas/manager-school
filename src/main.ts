import { NestFactory } from '@nestjs/core';
import { AppModule } from './adapter/driver/nestjs/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('The Manager Schools')
    .setDescription('The Manager Schools API description')
    .setVersion('1.0')
    .addTag('schools')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3002);
}
bootstrap();
