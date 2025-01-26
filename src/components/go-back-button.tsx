import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface GoBackButtonProps {
	url: string;
}
export function GoBackButton({ url }: GoBackButtonProps) {
	return (
		<Link
			href={url}
			className="w-fit flex items-center flex-row hover:text-yellow-400 text-white text-xl"
		>
			<ChevronLeft className="size-8 mr-1" strokeWidth={1} />
			<span className="font-bold">Voltar</span>
		</Link>
	);
}
