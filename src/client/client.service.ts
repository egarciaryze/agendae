import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';
import { v4 } from 'uuid';
import { User } from '../users/users.entity'
import { SchedulletDto } from './dto/schedulle.dto';
import { Schedulle } from './entities/schedulle.entity';

@Injectable()
export class ClientService {
  async create(createClientDto: CreateClientDto) {
    let user = User.create({
      id: v4(),
      username: createClientDto.username,
      password: createClientDto.password,
    })

    let client = Client.create({
      id: v4(),
      name: createClientDto.name,
      taxId: createClientDto.taxId,
    })

    await user.save();
    await client.save();

    return client;
  }

  // async schedulle(id: string, schedulleDto: SchedulletDto) {
  //   let schedulle = Schedulle.create({
  //     id: v4(),
  //     client: id,
  //     serviceProvider: schedulleDto.serviceProviderId,
  //   })

  //   await schedulle.save();

  //   return schedulle;
  // }

  async findAll() {
    return await Client.find();
  }

  async findOne(id: number) {
    return await Client.findOne(id);
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  async remove(id: number) {
    return await Client.delete(id);
  }
}
