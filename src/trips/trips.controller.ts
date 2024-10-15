import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { TripsService } from './trips.service';
import { Trip } from './trip.entity';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.tripsService.findAll(page, limit);
  }

  @Post()
  create(@Body() trip: Trip) {
    return this.tripsService.create(trip);
  }
}
