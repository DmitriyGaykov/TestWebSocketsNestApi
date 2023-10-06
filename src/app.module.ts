import { Module } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';
import { DataModule } from './data/data.module';
import { WebsocketModule } from './websocket/websocket.module';
import { WebsocketGateway } from "./websocket/websocket.gateway";

@Module({
  imports: [MessagesModule, DataModule, WebsocketModule],
})
export class AppModule {}
