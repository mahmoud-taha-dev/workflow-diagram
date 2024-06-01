import { FC } from "react";
import { ICustomNode } from "../constants";
import { CustomNode } from "./CustomNode";

export const Rhombous: FC<ICustomNode> = (props) => {
	return (
		<CustomNode {...props} className="bg-orange-400 w-[200px] h-[200px]" />
	);
}
