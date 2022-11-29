import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { UsersModule } from './users/users.module';
import { ServiceProviderModule } from './service-provider/service-provider.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from "../ormconfig"

@Module({
  imports: [ClientModule, UsersModule, ServiceProviderModule, AuthModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
