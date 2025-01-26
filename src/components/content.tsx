import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContentProps {
	children: ReactNode;
	className?: string;
}
export function Content({ children, className }: ContentProps) {
	return (
		<div
			className={cn(
				"w-full w-max-[1440px] items-center justify-between flex flex-row py-4 px-8 gap-4",
				className,
			)}
		>
			{children}
		</div>
	);
}
