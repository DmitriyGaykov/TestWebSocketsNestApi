import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Socket } from "socket.io";
import { WsException } from "@nestjs/websockets";

@Catch()
export class WsExceptionFilter implements ExceptionFilter {
  catch(exception: WsException, host: ArgumentsHost) : void  {
    const socket : Socket  = host.switchToWs().getClient<Socket>();
    socket.emit('error', exception.message)
  }
}
