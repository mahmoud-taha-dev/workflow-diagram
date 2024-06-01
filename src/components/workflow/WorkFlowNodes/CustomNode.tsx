import React, { FC } from 'react';
import { useReactFlow } from 'reactflow';
import { CircleX } from 'lucide-react';
import { NodeHandles } from './NodeHandles';
import { ICustomNode } from '../constants';
import clsx from 'clsx';

export const CustomNode: FC<ICustomNode> = ({ id, data, isConnectable, className }) => {
    const { setNodes, setEdges } = useReactFlow();

    const onRemove = () => {
        setNodes((nodes) => nodes.filter((node) => node.id !== id));
        setEdges((edges) => edges.filter((edge) => edge.source !== id && edge.target !== id));
    };

    return (
        <div className="relative">
            <div className={clsx("relativ group", className)}>
                <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={onRemove}
                >
                    <CircleX size={16} />
                </button>
            </div>
            <NodeHandles
                drawerButton={data.drawerButton}
                isConnectable={isConnectable}
                isLast={data.isLast}
            />
        </div>
    );
};
