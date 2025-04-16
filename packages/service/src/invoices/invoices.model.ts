import { type } from 'arktype';

export const InvoiceSenderSchema = type({
  name: 'string',
  address: 'string',
  city: 'string',
  state: 'string',
  country: 'string',
  postalCode: 'string.digits',
  phone: 'string.digits',
  email: 'string.email',
});

export const InvoiceReceiverSchema = type({
  name: 'string',
  address: 'string',
  city: 'string',
  state: 'string',
  country: 'string',
  postalCode: 'string.digits',
  phone: 'string.digits',
  email: 'string.email',
});

export const InvoiceItemSchema = type({
  name: 'string>1',
  description: 'string?',
  quantity: 'number>0',
  price: 'number>0',
  total: 'number>0',
});

export const SignatureSchema = type({
  data: 'string',
  fontFamily: 'string?',
});

export const PaymentInformationSchema = type({
  bankName: 'string>0',
  accountName: 'string>0',
  accountNumber: 'string.digits',
});
export const DiscountDetailsSchema = type({
  amount: 'number>0',
  amountType: 'string',
});

export const TaxDetailsSchema = type({
  amount: 'number>0',
  taxID: 'string',
  amountType: 'string',
});

export const ShippingDetailsSchema = type({
  cost: 'number>0',
  costType: 'string',
});

export const InvoiceSchema = type({
  id: 'string>0',
  sender: InvoiceSenderSchema,
  receiver: InvoiceReceiverSchema,
  invoiceLogo: 'string',
  invoiceNumber: 'string>0',
  invoiceDate: 'string.date',
  dueDate: 'string.date',
  purchaseOrderNumber: 'string>0',
  currency: 'string',
  language: 'string',
  items: InvoiceItemSchema.array(),
  paymentInformation: PaymentInformationSchema,
  taxDetails: TaxDetailsSchema,
  discountDetails: DiscountDetailsSchema,
  shippingDetails: ShippingDetailsSchema,
  subTotal: 'number>0',
  totalAmount: 'number>0',
  totalAmountInWords: 'string>0',
  additionalNotes: 'string>0',
  paymentTerms: 'string>0',
  signature: SignatureSchema,
  updatedAt: 'string.date',
  pdfTemplate: 'string',
});

export type Invoice = typeof InvoiceSchema.infer;
export type InvoiceSender = typeof InvoiceSenderSchema.infer;
export type InvoiceReceiver = typeof InvoiceReceiverSchema.infer;
export type Signature = typeof SignatureSchema.infer;
export type PaymentInformation = typeof PaymentInformationSchema.infer;
export type DiscountDetails = typeof DiscountDetailsSchema.infer;
export type TaxDetails = typeof TaxDetailsSchema.infer;
export type ShippingDetails = typeof ShippingDetailsSchema.infer;
export type InvoiceItem = typeof InvoiceItemSchema.infer;
