import { MessageModel } from "../models/message.model";
import { MinLength } from "class-validator";

export class AddMessageDto implements Omit<MessageModel, 'id'> {
  @MinLength(2)
  message: string;
  @MinLength(2)
  recipient: string;
  @MinLength(2)
  sender: string;
}