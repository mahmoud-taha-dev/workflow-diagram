import { FC } from 'react';
import { ICustomNode } from '../constants';
import { CustomNode } from './CustomNode';

export const RoundedRectangular: FC<ICustomNode> = (props) => {

	return (
		<CustomNode {...props} className="bg-purple-700 w-[200px] h-[100px] rounded-full" />
	);
};
