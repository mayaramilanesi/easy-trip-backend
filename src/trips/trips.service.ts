import { Injectable, OnModuleInit } from '@nestjs/common';
import { Trip } from './trip.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TripsService implements OnModuleInit {
  constructor(
    @InjectRepository(Trip)
    private tripsRepository: Repository<Trip>,
  ) {}

  async onModuleInit() {
    const count = await this.tripsRepository.count();
    if (count === 0) {
      const trips = [
        { name: 'Rio de Janeiro', price: 1200 },
        { name: 'Paris', price: 4500 },
        { name: 'Tokyo', price: 5000 },
        { name: 'New York', price: 3000 },
        { name: 'Bangkok', price: 2500 },
        { name: 'Dubai', price: 4000 },
        { name: 'Sydney', price: 6000 },
        { name: 'Cape Town', price: 3500 },
        { name: 'London', price: 3800 },
        { name: 'Rome', price: 3200 },
        { name: 'Istanbul', price: 2900 },
        { name: 'Bali', price: 2200 },
        { name: 'Cancun', price: 2700 },
        { name: 'Maui', price: 5500 },
        { name: 'Hong Kong', price: 4300 },
        { name: 'Santorini', price: 3300 },
        { name: 'Las Vegas', price: 3100 },
        { name: 'Los Angeles', price: 2900 },
        { name: 'Amsterdam', price: 3600 },
        { name: 'Barcelona', price: 3400 },
        { name: 'Prague', price: 2500 },
        { name: 'Lisbon', price: 2600 },
        { name: 'Vienna', price: 3200 },
        { name: 'Marrakech', price: 2800 },
        { name: 'Phuket', price: 2100 },
        { name: 'Maldives', price: 7000 },
        { name: 'Hawaii', price: 5000 },
        { name: 'Seoul', price: 3900 },
        { name: 'Mexico City', price: 1800 },
        { name: 'Venice', price: 3500 },
      ];
      await this.tripsRepository.save(trips);
    }
  }

  async findAll(page: number, limit: number): Promise<Trip[]> {
    const [result] = await this.tripsRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });
    return result;
  }

  async create(trip: Trip): Promise<Trip> {
    return this.tripsRepository.save(trip);
  }
}
