import { useForm } from "@tanstack/react-form";
import { InvoiceInfoSchema } from "./types";

const defaultValues = {
	sender: {
		name: "",
		address: "",
		zip: "",
		city: "",
		country: "",
		email: "",
		phone: "",
	},
	receiver: {
		name: "",
		address: "",
		zip: "",
		city: "",
		country: "",
		email: "",
		phone: "",
	},
};
const useInvoiceForm = () => {
	const form = useForm({
		defaultValues,
		validators: {
			onChange: InvoiceInfoSchema,
		},
		onSubmit: async ({ value }) => {
			console.log("🐵 ------ onSubmit", value);
		},
	});

	return form;
};

export default useInvoiceForm;
