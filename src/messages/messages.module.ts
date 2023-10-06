import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { DataService } from "../data/data.service";

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, DataService]
})
export class MessagesModule {}
