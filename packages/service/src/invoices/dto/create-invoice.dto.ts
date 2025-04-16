const CreateInvoiceDto = {
  sender: {
    name: 'string>0',
    address: 'string>0',
    city: 'string>0',
    state: 'string>0',
    country: 'string>0',
    postalCode: 'string.digits>0',
    phone: 'string.digits>0',
    email: 'string.email>0',
  },
};
