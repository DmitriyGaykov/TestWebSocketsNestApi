import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from 'socket.io'
import { MessageModel } from "../data/models/message.model";
import { WebsocketService } from "./websocket.service";
import { MessageValidPipe } from "../pipes/message-valid/message-valid.pipe";
import { UseFilters, UsePipes } from "@nestjs/common";
import { WsExceptionFilter } from "../filters/wsexception/wsexception.filter";

@WebSocketGateway(3002)
@UseFilters(WsExceptionFilter)
export class WebsocketGateway {
  @WebSocketServer() private readonly server : Server;

  constructor(
    private readonly websocketService : WebsocketService
  ) {}

  @SubscribeMessage('SetName')
  setNameForSocket(@MessageBody('name') name : string, @ConnectedSocket() socket : Socket) : void {
    return this.websocketService.setNameForSocket(socket, name);
  }

  @SubscribeMessage('SendMessage')
  @UsePipes(MessageValidPipe)
  async sendMessage(@MessageBody() message : MessageModel) : Promise<void> {
    try {
      return await this.websocketService.sendMessage(message, this.server);
    } catch (e : unknown) {
      throw e;
    }
  }
}
