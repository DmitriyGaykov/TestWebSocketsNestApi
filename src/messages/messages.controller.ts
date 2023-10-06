import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { MessageModel } from "../data/models/message.model";
import { MessagesService } from "./messages.service";
import { AddMessageDto } from "../data/dto/add-message.dto";

@Controller('/messages')
export class MessagesController {
  constructor(
    private readonly messageService : MessagesService
  ) {}
  @Get()
  getMessages() : MessageModel[] {
    return this.messageService.getMessages();
  }

  @Post()
  @UsePipes(ValidationPipe)
  addMessage(@Body() body : AddMessageDto) : MessageModel {
    return this.messageService.addMessage(body)
  }
}
