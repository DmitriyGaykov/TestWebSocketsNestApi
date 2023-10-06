import { Injectable } from '@nestjs/common';
import { MessageModel } from "../data/models/message.model";
import { DataService } from "../data/data.service";
import { AddMessageDto } from "../data/dto/add-message.dto";

@Injectable()
export class MessagesService {
  constructor(
    private readonly dataService : DataService
  ) {}
  addMessage(message: AddMessageDto): MessageModel {
    return this.dataService.addMessage(message);
  }

  getMessages() : MessageModel[] {
    return this.dataService.getMessages();
  }
}
