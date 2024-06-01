import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { NodeItem, nodes } from "./constants";
import { FC } from "react";



interface IWorkflowDrawer {
	closeDrawer: () => void;
	addNewNode: (item: NodeItem) => void;
}

export const WorkflowDrawer: FC<IWorkflowDrawer> = ({
	closeDrawer,
	addNewNode,
}) => {
	return (
		<div className="w-[443px] flex flex-col absolute z-10 right-0 top-0 bg-background h-full shadow-lg border-l">
			<div className="flex items-center justify-between gap-2 border-b py-3 px-6">
				<h4 className="text-lg font-semibold">Nodes</h4>
				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon" onClick={closeDrawer}>
						<X size={16} />
					</Button>
				</div>
			</div>
			<div className="p-6 overflow-auto scrollbar">
				<div className="flex flex-col gap-2.5 mt-2.5">
					{nodes.map((item) => (
						<Button
							variant="outline"
							key={item.key}
							className="flex justify-start items-center p-2 gap-3"
							onClick={() => {
								addNewNode(item);
							}}
						>
							<div className="w-6 h-6 flex items-center justify-center rounded bg-secondary border text-muted-foreground">
								{item.icon}
							</div>
							{item.title}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
};
