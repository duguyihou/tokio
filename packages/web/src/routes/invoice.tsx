import { createFileRoute } from '@tanstack/react-router'
import { InvoiceRoute } from '../features/invoices'

export const Route = createFileRoute('/invoice')({
  component: InvoiceRoute,
})


