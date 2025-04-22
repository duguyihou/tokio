import { cn } from "@/lib/utils";

interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	name: string;
	label: string;
	className?: string;
}
/**
 * FieldLabel is a component that renders a label for a form field.
 * It accepts the following props:
 * - name: The name of the field (required)
 * - label: The label text to be displayed (required)
 * - className: Additional class names to be applied to the label (optional)
 */
const FieldLabel = (props: FieldLabelProps) => {
	const { name, label, className } = props;
	return (
		<label className={cn("font-semibold w-36", className)} htmlFor={name}>
			{label}
		</label>
	);
};

export default FieldLabel;
