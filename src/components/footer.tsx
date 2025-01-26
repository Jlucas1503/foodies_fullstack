import { Content } from "./content";
import { Logo } from "./logo";

export function Footer() {
	return (
		<footer className="w-full flex items-center justify-center bg-blue-950">
			<Content>
				<Logo size={31} />
				<p className="text-sm text-gray-300">
					© 2025 - Todos os direitos reservados.
				</p>
			</Content>
		</footer>
	);
}
