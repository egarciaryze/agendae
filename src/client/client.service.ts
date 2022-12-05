import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { v4 } from 'uuid';
import { User } from '../users/users.entity'
import { SchedulletDto } from './dto/schedulle.dto';
import { Schedulle } from './entities/schedulle.entity';
import { ServiceProviderService } from '../service-provider/service-provider.service'

@Injectable()
export class ClientService {
  constructor(private readonly serviceProviderService: ServiceProviderService) {}

  async create(createClientDto: CreateClientDto) {
    let user = User.create({
      id: v4(),
      username: createClientDto.email,
      password: createClientDto.password,
    })

    let client = Client.create({
      id: v4(),
      name: createClientDto.name,
      email: createClientDto.email,
    })

    await user.save();
    await client.save();

    return client;
  }

  async schedulle(id: string, schedulleDto: SchedulletDto) {
    const client = await this.findOne(schedulleDto.clientId);
    const serviceProvider = await this.serviceProviderService.findOne(schedulleDto.serviceProviderId)

    let schedulle = Schedulle.create({
      client,
      serviceProvider,
      date: schedulleDto.date,
      hour: schedulleDto.hour,
    })

    await schedulle.save();

    return schedulle;
  }

  async findAll() {
    return await Client.find();
  }

  async findOne(id: string) {
    return await Client.findOne(id);
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  async remove(id: number) {
    return await Client.delete(id);
  }
}
