import { Injectable } from "@nestjs/common";
import { MessageModel } from "./models/message.model";
import { v4 } from 'uuid';
import { AddMessageDto } from "./dto/add-message.dto";
@Injectable()
export class DataService {
  private readonly messages : MessageModel[] = [];

  addMessage(message : AddMessageDto) : MessageModel {
    const id = v4();

    const nmessage : MessageModel = {
      ...message,
      id
    }
    this.messages.push(nmessage);
    return { ...nmessage };
  }

  getMessages() : MessageModel[] {
    return [...this.messages];
  }
}
