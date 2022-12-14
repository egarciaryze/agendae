import { Module } from '@nestjs/common';
import { ServiceProviderService } from './service-provider.service';
import { ServiceProviderController } from './service-provider.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ServiceProviderController],
  providers: [ServiceProviderService],
  imports: [AuthModule],
  exports: [ServiceProviderService],
})
export class ServiceProviderModule {}
