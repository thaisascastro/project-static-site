import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Ticket } from '../entities/ticket.entity';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(Ticket)
    private readonly repository: Repository<Ticket>,
  ) {}

  async getAll(): Promise<Ticket[]> {
    return this.repository.find();
  }

  async getById(id: number): Promise<Ticket> {
    return this.repository.findOne(id);
  }

  async createTicket(data: Ticket): Promise<Ticket> {
    return await this.repository.save(data);
  }
}
