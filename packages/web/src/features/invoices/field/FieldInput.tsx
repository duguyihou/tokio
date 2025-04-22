import { cn } from "@/lib/utils";

export interface FieldInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
}

/**
 * This component is a styled input field that can be used in forms.
 * It accepts all standard input attributes and applies custom styles.
 * It also supports a `ref` for direct DOM manipulation.
 *
 * @param {InputProps} props - The properties passed to the component.
 * @param {React.Ref} ref - The reference to the input element.
 * @returns {JSX.Element} The styled input element.
 */

const FieldInput = (props: FieldInputProps) => {
	const { className, type, ...rest } = props;
	return (
		<input
			type={type}
			className={cn(
				"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...rest}
		/>
	);
};

export default FieldInput;
