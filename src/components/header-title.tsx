import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface HeaderTitleProps {
	className?: string;
	children: ReactNode;
}
export function HeaderTitle({ className, children }: HeaderTitleProps) {
	return (
		<div
			className={cn(
				"w-full flex text-gray-300 font-medium text-3xl pb-12",
				className,
			)}
		>
			{children}
		</div>
	);
}
