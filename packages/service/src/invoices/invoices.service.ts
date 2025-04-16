import { Injectable } from '@nestjs/common';
import { Invoice } from './invoices.model';

@Injectable()
export class InvoicesService {
  private invoices: Invoice[] = [
    {
      id: '1',
      sender: {
        name: 'John Doe',
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        phone: '123-456-7890',
        email: 'john.doe@example.com',
        country: 'USA',
      },
      receiver: {
        name: 'Jane Smith',
        address: '456 Elm St',
        postalCode: '90001',
        phone: '987-654-3210',
        email: 'jane.smith@example.com',
        state: 'CA',
        country: 'USA',
        city: 'Los Angeles',
      },
      invoiceLogo: 'logo.png',
      invoiceNumber: 'INV-001',
      invoiceDate: '2023-10-01',
      dueDate: '2023-10-15',
      purchaseOrderNumber: 'PO-12345',
      currency: 'USD',
      language: 'en',
      paymentInformation: {
        bankName: 'Bank of America',
        accountName: 'John Doe',
        accountNumber: '123456789',
      },
      taxDetails: {
        amount: 5.0,
        taxID: 'TAX-123',
        amountType: 'percentage',
      },
      discountDetails: {
        amount: 10.0,
        amountType: 'fixed',
      },
      shippingDetails: {
        cost: 15.0,
        costType: 'fixed',
      },
      subTotal: 35.0,
      totalAmount: 40.0,
      totalAmountInWords: 'Forty dollars',
      additionalNotes: 'Thank you for your business!',
      paymentTerms: 'Net 30 days',
      signature: {
        data: 'signature.png',
        fontFamily: 'Arial',
      },
      updatedAt: '2023-10-01T12:00:00Z',
      pdfTemplate: 'template.pdf',
      items: [
        {
          name: 'Item 1',
          description: 'Description 1',
          quantity: 2,
          price: 10.0,
          total: 20.0,
        },
        {
          name: 'Item 2',
          description: 'Description 2',
          quantity: 1,
          price: 15.0,
          total: 15.0,
        },
      ],
    },
  ];

  getAllInvoices() {
    return this.invoices;
  }

  createInvoice(invoice: Invoice) {
    this.invoices.push(invoice);
    return invoice;
  }
}
