import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { AuthModule } from '../auth/auth.module';
import { ServiceProviderModule } from '../service-provider/service-provider.module';

@Module({
  controllers: [ClientController],
  providers: [ClientService],
  imports: [AuthModule, ServiceProviderModule],
})
export class ClientModule {}
