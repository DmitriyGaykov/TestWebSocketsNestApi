import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { MessageModel } from "../../data/models/message.model";
import { WsException } from "@nestjs/websockets";

@Injectable()
export class MessageValidPipe implements PipeTransform {
  transform(value: MessageModel, metadata: ArgumentMetadata) {
    if(value.id && value.recipient && value.message && value.sender) {
      return value;
    }
    throw new WsException('Message is not valid!');
  }
}
