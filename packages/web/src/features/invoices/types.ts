import { z } from "zod";

export const InvoiceSenderSchema = z.object({
	name: z.string().min(3, "Name must be at least 3 characters"),
	address: z.string(),
	zip: z.string(),
	city: z.string(),
	country: z.string(),
	email: z.string().email("Invalid email address"),
	phone: z.string(),
});

export const InvoiceReceiverSchema = z.object({
	name: z.string().min(3, "Name must be at least 3 characters"),
	address: z.string(),
	zip: z.string(),
	city: z.string(),
	country: z.string(),
	email: z.string().email("Invalid email address"),
	phone: z.string(),
});

export const InvoiceInfoSchema = z.object({
	sender: InvoiceSenderSchema,
	receiver: InvoiceReceiverSchema,
});

export type InvoiceSender = z.infer<typeof InvoiceSenderSchema>;
export type InvoiceReceiver = z.infer<typeof InvoiceReceiverSchema>;
export type InvoiceInfo = z.infer<typeof InvoiceInfoSchema>;
