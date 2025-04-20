import React from 'react';
import { AnyFieldApi, useForm } from '@tanstack/react-form';

const BillFromSection: React.FC = () => {
  const form = useForm({
    defaultValues: {
      receiverName: '',
      lastName: '',
    },
    validators: {
      onChange: ({ value }) => !value.receiverName ? ['Name is required'] : value.receiverName.length < 3 ? ['Name must be at least 3 characters'] : undefined,
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value)
    },
  })

  const handleSubmit=(e)=>{
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <form.Field name='receiverName'
        children={field => {
          return <>
            <label htmlFor={field.name}>Name:</label>
            <input id={field.name} name={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={(e) => field.handleChange(e.target.value)} />
            <FieldInfo field={field} />
          </>
        }} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BillFromSection;

const FieldInfo = ({ field }: { field: AnyFieldApi }) => {
  return (
    <div>
      {field.state.meta.errors && (
        <span style={{ color: 'red' }}>{field.state.meta.errors.join(", ")}</span>
      )}
    </div>
  );
};