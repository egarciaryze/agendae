import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ServiceProviderService } from './service-provider.service';
import { CreateServiceProviderDto } from './dto/create-service-provider.dto';
import { UpdateServiceProviderDto } from './dto/update-service-provider.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('service-provider')
export class ServiceProviderController {
  constructor(private readonly serviceProviderService: ServiceProviderService) {}

  @Post()
  create(@Body() createServiceProviderDto: CreateServiceProviderDto) {
    return this.serviceProviderService.create(createServiceProviderDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.serviceProviderService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceProviderService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceProviderDto: UpdateServiceProviderDto) {
    return this.serviceProviderService.update(+id, updateServiceProviderDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceProviderService.remove(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/schedulle')
  getSchedulleByServiceProvider(@Param('id') id: string) {
    return this.serviceProviderService.getServiceProviderSchedulle(id);
  }
}
