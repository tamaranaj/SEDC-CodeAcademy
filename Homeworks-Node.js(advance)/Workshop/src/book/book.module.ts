import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookORMEntity } from './book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorORMEntity } from 'src/author/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookORMEntity, AuthorORMEntity])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
