import { Body, Controller, Get, Post } from '@nestjs/common';

import { Ticket } from '../entities/ticket.entity';
import { TicketService } from '../services/ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly service: TicketService) {}

  @Get()
  getAll(): Promise<Ticket[]> {
    return this.service.getAll();
  }

  @Post()
  createTicket(@Body() data: Ticket): Promise<Ticket> {
    return this.service.createTicket(data);
  }
}
