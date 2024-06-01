import { BaseEdge, EdgeLabelRenderer, getSmoothStepPath, useReactFlow, EdgeProps, Edge } from 'reactflow';


export const ButtonEdge: React.FC<EdgeProps> = ({
	id,
	sourceX,
	sourceY,
	targetX,
	targetY,
	sourcePosition,
	targetPosition,
	style,
	markerEnd,
}) => {
	const { setEdges } = useReactFlow();
	const [edgePath, labelX, labelY] = getSmoothStepPath({
		sourceX,
		sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition,
	});

	const onEdgeClick = () => {
		setEdges((edges: Edge[]) => edges.filter((edge) => edge.id !== id));
	};

	return (
		<>
			<BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
			<EdgeLabelRenderer>
				<div
					style={{
						position: 'absolute',
						transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
						fontSize: 14,
						pointerEvents: 'all',
					}}
					className="nodrag nopan"
				>
					<button
						className="flex items-center justify-center w-4 h-4 rounded-full bg-secondary border border-foreground text-foreground"
						onClick={onEdgeClick}
					>
						×
					</button>
				</div>
			</EdgeLabelRenderer>
		</>
	);
};
