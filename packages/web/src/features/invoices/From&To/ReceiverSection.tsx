import FieldInfo from "../field/FieldInfo";
import FieldInput from "../field/FieldInput";
import FieldItem from "../field/FieldItem";
import FieldLabel from "../field/FieldLabel";
import type useInvoiceForm from "../useInvoiceForm";

type Props = {
	invoiceForm: ReturnType<typeof useInvoiceForm>;
};
const ReceiverSection = (props: Props) => {
	const {
		invoiceForm: { Field },
	} = props;

	return (
		<div>
			<h2 className="text-2xl font-bold">Bill To</h2>
			<p className="text-gray-500 text-sm">
				Fill in the details of the receiver of the invoice.
			</p>
			<Field name="receiver.name">
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
								placeholder="Receiver name"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
			<Field name="receiver.address">
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
								placeholder="Receiver address"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
			<Field name="receiver.zip">
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
								placeholder="Receiver zip code"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
			<Field name="receiver.city">
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
								placeholder="Receiver city"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
			<Field name="receiver.country">
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
								placeholder="Receiver country"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
			<Field name="receiver.email">
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
								placeholder="Receiver email"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
			<Field name="receiver.phone">
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
								placeholder="Receiver phone number"
							/>
						</FieldItem>
						<FieldInfo field={field} />
					</>
				)}
			</Field>
		</div>
	);
};

export default ReceiverSection;
