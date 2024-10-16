import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trip {
  @ApiProperty({ example: 1, description: 'O ID da viagem' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Rio de Janeiro', description: 'O destino da viagem' })
  @Column()
  name: string;

  @ApiProperty({ example: 1500, description: 'O preço da viagem em reais' })
  @Column()
  price: number;
}
