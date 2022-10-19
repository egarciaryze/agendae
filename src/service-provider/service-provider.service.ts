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
      username: createServiceProviderDto.username,
      password: createServiceProviderDto.password,
    })

    let client = ServiceProvider.create({
      id: v4(),
      companyName: createServiceProviderDto.companyName,
      taxId: createServiceProviderDto.taxId,
      email: createServiceProviderDto.email,
      phone: createServiceProviderDto.phone,
      address: createServiceProviderDto.address,
    })

    await user.save();
    await client.save();

    return client;
  }

  async findAll() {
    return await ServiceProvider.find();
  }

  async findOne(id: number) {
    return await ServiceProvider.findOne(id);
  }

  update(id: number, updateServiceProviderDto: UpdateServiceProviderDto) {
    return `This action updates a #${id} serviceProvider`;
  }

  async remove(id: number) {
    return await ServiceProvider.delete(id);
  }

  async getServiceProviderSchedulle(id: string) {
    return await Schedulle.find({ where: { serviceProviderId: id } });
  }
}
