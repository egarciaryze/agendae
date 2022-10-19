import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { SchedulletDto } from './dto/schedulle.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientService.create(createClientDto);
  }

  // @UseGuards(JwtAuthGuard)
  // @Post(':id/schedulle')
  // schedulle(@Param('id') id: string, @Body() schedulletDto: SchedulletDto) {
  //   return this.clientService.schedulle(id, schedulletDto);
  // }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.clientService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.update(+id, updateClientDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientService.remove(+id);
  }
}
