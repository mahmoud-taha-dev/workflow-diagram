import { FC } from "react";
import { ICustomNode } from "../constants";
import { CustomNode } from "./CustomNode";

export const Rectangular: FC<ICustomNode> = (props) => {
	return (
		<CustomNode {...props} className="bg-blue-700 w-[200px] h-[100px]" />
	);
}
