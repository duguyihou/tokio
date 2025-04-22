import type { AnyFieldApi } from "@tanstack/react-form";

const FieldInfo = ({ field }: { field: AnyFieldApi }) => {
	return (
		<div className="text-sm text-red-500">
			{field.state.meta.isTouched && field.state.meta.errors.length ? (
				<em>{field.state.meta.errors.map((err) => err.message).join(",")}</em>
			) : null}
			{field.state.meta.isValidating ? "Validating..." : null}
		</div>
	);
};

export default FieldInfo;
