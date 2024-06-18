import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsController } from './clients/clients.controller';
import { WalletsController } from './wallets/wallets.controller';
import { storeProvider } from './store/store.provider';
import { StoreService } from './store/store.service';

@Module({
  imports: [],
  controllers: [AppController, ClientsController, WalletsController],
  providers: [AppService, storeProvider, StoreService],
})
export class AppModule {}
