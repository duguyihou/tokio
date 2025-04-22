import type { PropsWithChildren } from "react";

type FieldLabelProps = PropsWithChildren;
const FieldItem = (props: FieldLabelProps) => {
	const { children } = props;
	return (
		<div className="space-y-6 flex flex-row justify-between items-center">
			{children}
		</div>
	);
};

export default FieldItem;
