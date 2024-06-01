import { Rhombous } from "./WorkFlowNodes/Rhombous";
import { ButtonEdge } from "./ButtonEdge";
import {
	Diamond,
	RectangleHorizontal,
} from "lucide-react";
import { RoundedRectangular } from "./WorkFlowNodes/RoundedRectangular";
import { Rectangular } from "./WorkFlowNodes/Rectangular";
import { ReactNode } from "react";
import { NodeProps } from 'reactflow';

export const nodeTypes = {
	roundedRectangular: RoundedRectangular,
	rectangular: Rectangular,
	rhombous: Rhombous,
};

export const edgeTypes = {
	removeConnectionButton: ButtonEdge,
};


export interface NodeItem {
	key: string;
	type: string;
	title: string;
	icon: ReactNode;
}


export interface ICustomNode extends NodeProps {
	data: {
		drawerButton?: ReactNode;
		isLast?: boolean;
	};
	className?: string;
}

export const nodes: NodeItem[] = [
	{
		key: "roundedRectangular",
		title: "Rounded Rectangular",
		icon: <RectangleHorizontal size={16} />,
		type: "roundedRectangular",
	},
	{
		key: "rectangular",
		title: "Rectangular",
		icon: <RectangleHorizontal size={16} />,
		type: "rectangular",
	},
	{
		key: "rhombous",
		title: "Rhombous",
		icon: <Diamond size={16} />,
		type: "rhombous",
	}
];
