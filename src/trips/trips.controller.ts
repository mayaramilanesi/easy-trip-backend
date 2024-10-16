import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery, ApiBody } from '@nestjs/swagger';
import { TripsService } from './trips.service';
import { Trip } from './trip.entity';

@ApiTags('trips')
@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @ApiOperation({ summary: 'Listar todas as viagens com paginação' })
  @ApiQuery({ name: 'page', required: false, example: 1, description: 'Número da página' })
  @ApiQuery({ name: 'limit', required: false, example: 10, description: 'Quantidade de itens por página' })

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.tripsService.findAll(page, limit);
  }

  @ApiOperation({ summary: 'Criar uma nova viagem' })
  @ApiBody({ type: Trip })
  @Post()
  create(@Body() trip: Trip) {
    return this.tripsService.create(trip);
  }
}
