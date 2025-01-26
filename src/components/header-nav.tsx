import { LogOut, Search, ShoppingBasket } from "lucide-react";
import { Content } from "./content";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function HeaderNav() {
	return (
		<header className="w-full flex items-center justify-center bg-blue-950">
			<Content>
				<Logo size={50} />
				<div className="w-full items-center justify-center flex flex-row bg-gray-950 px-2 rounded-md">
					<Search className="text-gray-300" />
					<Input
						className="text-gray-400 placeholder:text-gray-600 bg-transparent border-0 focus-visible:border-0 focus-visible:outline-none ring-0 focus-visible:ring-0 rounded-none"
						placeholder="Busque por pratos ou ingredientes"
					/>
				</div>

				<Button variant="gold" className="font-medium text-sm">
					<ShoppingBasket className="size-8 text-white" strokeWidth={1} />
					Pedidos (0)
				</Button>
				<Button variant="ghost" className="hover:bg-black/30" asChild>
					<a href="/logout">
						<LogOut className="size-8 text-white" strokeWidth={1} />
					</a>
				</Button>
			</Content>
		</header>
	);
}
