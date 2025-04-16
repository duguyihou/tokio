import { Body, Controller, Get, Post } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { Invoice } from './invoices.model';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  getAllInvoices(): Invoice[] {
    return this.invoicesService.getAllInvoices();
  }

  @Post()
  createInvoice(@Body() invoice: Invoice): Invoice {
    return this.invoicesService.createInvoice(invoice);
  }
}
