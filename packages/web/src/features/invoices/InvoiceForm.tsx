import { Button } from "@/components/ui/button";
import type { FormEvent } from "react";
import BillFromSection from "./BillFromSection";
import BillToSection from "./BillToSection";
import useInvoiceForm from "./useInvoiceForm";

const InvoiceForm = () => {
	const invoiceForm = useInvoiceForm();
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		e.stopPropagation();
		invoiceForm.handleSubmit();
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col p-4">
			<div className="flex gap-6">
				<BillFromSection />
				<BillToSection />
			</div>
			inv
			<div className="flex justify-end w-full">
				<Button type="submit" disabled={!invoiceForm.state.isValid}>
					Next
				</Button>
			</div>
		</form>
	);
};

export default InvoiceForm;
