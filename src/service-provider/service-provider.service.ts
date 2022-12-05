import { Injectable } from '@nestjs/common';
import { User } from '../users/users.entity';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';
import { v4 } from 'uuid';
import { ServiceProvider } from './entities/service-provider.entity';
import { Schedulle } from '../client/entities/schedulle.entity';

@Injectable()
export class ServiceProviderService {
  async create(createServiceProviderDto: CreateServiceProviderDto) {
    let user = User.create({
      id: v4(),
      username: createServiceProviderDto.email,
      password: createServiceProviderDto.password,
    })

    let client = ServiceProvider.create({
      id: v4(),
      name: createServiceProviderDto.name,
      email: createServiceProviderDto.email,
    })

    await user.save();
    await client.save();

    return client;
  }

  async findAll() {
    return await ServiceProvider.find();
  }

  async findOne(id: string) {
    return await ServiceProvider.findOne(id);
  }

  update(id: number, updateServiceProviderDto: UpdateServiceProviderDto) {
    return `This action updates a #${id} serviceProvider`;
  }

  async remove(id: number) {
    return ServiceProvider.delete(id);
  }

  async getServiceProviderSchedulle(id: string) {
    return Schedulle.find({ where: { serviceProvider: id }, order: { date:  "ASC" }, relations: ['client', 'serviceProvider']});
  }
}
