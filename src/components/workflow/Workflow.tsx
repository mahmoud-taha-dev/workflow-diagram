"use client";
import { Plus } from "lucide-react";
import { useState } from "react";
import ReactFlow, {
	Controls,
	Background,
	useNodesState,
	useEdgesState,
	addEdge,
	BackgroundVariant,
	MarkerType,
	Node,
	Connection,
	OnConnect,
} from "reactflow";
import "reactflow/dist/style.css";
import { NodeItem, edgeTypes, nodeTypes } from "./constants";
import { WorkflowDrawer } from "./WorkflowDrawer";

interface NodeData {
	label: string;
	isLast?: boolean;
	drawerButton?: JSX.Element;
}

export const Workflow = () => {
	const [drawerOpened, setDrawerOpened] = useState(false);
	const [nodes, setNodes, onNodesChange] = useNodesState([]);
	const [edges, setEdges, onEdgesChange] = useEdgesState([]);

	const onConnect: OnConnect = (params: Connection) => {
		const newEdges = addEdge(
			{
				...params,
				type: "removeConnectionButton",
				className: "stroke-slate-500",
				markerEnd: {
					type: MarkerType.ArrowClosed,
					strokeWidth: 3,
					height: 20,
					width: 20,
				},
			},
			edges
		);

		setEdges(newEdges);
	};

	const updatedNodes = nodes.map((node) => ({
		...node,
		data: {
			...node.data,
			isLast: !edges.find((edge) => edge.source === node.id),
			drawerButton: (
						<button
							className="w-6 h-6 p-1. rounded-full bg-primary flex items-center justify-center"
							onClick={() => {
								setDrawerOpened(true);
							}}
						>
							<Plus size={12} className="stroke-secondary" />
						</button>
			)
				
		},
	}));

	const addNewNode = (item: NodeItem) => {
		const newNode: Node<NodeData> = {
			type: item.type,
			id: Math.random().toString(36).substring(2, 15),
			position: {
				x: Math.random() * 100,
				y: Math.random() * 100,
			},
			data: { label: item.title },
		};

		const newNodes = [...nodes, newNode];

		setNodes(newNodes);
	};

	return (
		<div className="relative flex w-full h-full overflow-hidden">
			<div className="flex-1 px-0 flex justify-center">
				{!nodes.length && (
					<button
						className="absolute top-40 z-10 w-6 h-6 p-1.5 rounded-full bg-primary flex items-center justify-center"
						onClick={() => {
							setDrawerOpened(true);
						}}
					>
						<Plus size={12} className="stroke-secondary" />
					</button>
				)}
				<ReactFlow
					nodes={updatedNodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					fitView
					nodeTypes={nodeTypes}
					edgeTypes={edgeTypes}
				>
					<Controls />
					<Background variant={BackgroundVariant.Dots} gap={8} size={2} />
				</ReactFlow>
			</div>
			{drawerOpened && (
				<WorkflowDrawer
					addNewNode={addNewNode}
					closeDrawer={() => {
						setDrawerOpened(false);
					}}
				/>
			)}
		</div>
	);
};
