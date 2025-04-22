import FieldInfo from "../field/field-info";
import FieldInput from "../field/field-input";
import FieldItem from "../field/field-item";
import FieldLabel from "../field/field-label";
import type useInvoiceForm from "../useInvoiceForm";

type Props = {
	invoiceForm: ReturnType<typeof useInvoiceForm>;
};
const SenderSection = (props: Props) => {
	const {
		invoiceForm: { Field },
	} = props;

	return (
		<div>
			<h2 className="text-2xl font-bold">Bill From</h2>
			<p className="text-gray-500 text-sm">
				Fill in the details of the sender of the invoice.
			</p>
			<Field name="sender.name">
				{(field) => (
					<>
						<FieldItem>
							<FieldLabel name={field.name} label="Name: " />
							<FieldInput
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								placeholder="Your name"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
			<Field name="sender.address">
				{(field) => (
					<>
						<FieldItem>
							<FieldLabel name={field.name} label="Address: " />
							<FieldInput
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								placeholder="Your address"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
			<Field name="sender.zip">
				{(field) => (
					<>
						<FieldItem>
							<FieldLabel name={field.name} label="Zip: " />
							<FieldInput
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								placeholder="Your zip code"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
			<Field name="sender.city">
				{(field) => (
					<>
						<FieldItem>
							<FieldLabel name={field.name} label="City: " />
							<FieldInput
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								placeholder="Your city"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
			<Field name="sender.country">
				{(field) => (
					<>
						<FieldItem>
							<FieldLabel name={field.name} label="Country: " />
							<FieldInput
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								placeholder="Your country"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
			<Field name="sender.email">
				{(field) => (
					<>
						<FieldItem>
							<FieldLabel name={field.name} label="Email: " />
							<FieldInput
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								placeholder="Your email"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
			<Field name="sender.phone">
				{(field) => (
					<>
						<FieldItem>
							<FieldLabel name={field.name} label="Phone: " />
							<FieldInput
								id={field.name}
								name={field.name}
								value={field.state.value}
								onBlur={field.handleBlur}
								onChange={(e) => field.handleChange(e.target.value)}
								placeholder="Your phone number"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
		</div>
	);
};

export default SenderSection;
