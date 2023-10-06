import { Injectable } from '@nestjs/common';
import { MessageModel } from "../data/models/message.model";
import { MessageBody, WsException } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@Injectable()
export class WebsocketService {
  async sendMessage(message : MessageModel, server : Server) : Promise<void> {
    return new Promise((resolve, reject) => {
      if(!message) {
        return reject(new WsException('Message is not valid!'));
      }

      const recipient = message.recipient;

      server.sockets.sockets.forEach(s => recipient && s.data.name === recipient && s.send(message));
      resolve();
    })
  }

  setNameForSocket(socket : Socket, name : string) : void {
    socket.data.name = name;
  }
}
