import { Button } from "@/components/ui/button";
import type { FormEvent } from "react";
import ReceiverSection from "./From&To/ReceiverSection";
import SenderSection from "./From&To/SenderSection";
import useInvoiceForm from "./useInvoiceForm";

const InvoiceForm = () => {
	const invoiceForm = useInvoiceForm();
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		event.stopPropagation();
		invoiceForm.handleSubmit()
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col p-4">
			<div className="flex gap-6">
				<SenderSection invoiceForm={invoiceForm} />
				<ReceiverSection invoiceForm={invoiceForm} />
			</div>
			<div className="flex justify-end w-full">
				<Button type="submit" disabled={!invoiceForm.state.isValid}>
					Next
				</Button>
			</div>
		</form>
	);
};

export default InvoiceForm;
