import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorORMEntity } from './author.entity';
import { BookORMEntity } from 'src/book/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorORMEntity, BookORMEntity])],
  controllers: [AuthorController],
  providers: [AuthorService]
})
export class AuthorModule {}
