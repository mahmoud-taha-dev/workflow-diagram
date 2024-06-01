import { FC, ReactNode } from 'react';
import { Handle, Position } from 'reactflow';

interface INodeHandles {
	isConnectable: boolean;
	isLast?: boolean;
	drawerButton?: ReactNode;
}

export const NodeHandles: FC<INodeHandles> = ({ isConnectable, isLast, drawerButton }) => {
	return (
		<>
			<Handle
				className="!w-[14px] !h-[14px] !top-auto !bottom-full !transform !-translate-x-1/2 !translate-y-1/2 border !border-primary !bg-background"
				type="target"
				position={Position.Top}
				isConnectable={isConnectable}
			/>
			<Handle
				className="!w-[14px] !h-[14px] !bottom-0 !top-full !transform !-translate-x-1/2 !-translate-y-1/2 border !border-primary !bg-background"
				type="source"
				position={Position.Bottom}
				isConnectable={isConnectable}
			/>
			{isLast && (
				<div className="flex flex-col items-center absolute top-full left-1/2 transform -translate-x-1/2">
					<div className="bg-slate-500 w-[1px] h-12 mt-1.5" />
					<div>{drawerButton}</div>
				</div>
			)}
		</>
	);
};
