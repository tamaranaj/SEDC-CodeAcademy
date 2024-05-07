import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())
  

  const docBuilder = new DocumentBuilder().setTitle('BUDGET TRACKER API DOCS').addBearerAuth({
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    name: 'JWT',
    description: 'Enter token',
    in: 'header'
  }).build()

  const document = SwaggerModule.createDocument(app, docBuilder) 

  SwaggerModule.setup('docs',app, document)
  await app.listen(3000);
}
bootstrap();
