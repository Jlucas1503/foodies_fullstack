"use client";
import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/currency";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
export function ProductDetailed() {
	return (
		<div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
			<div className="w-[400px] shrink-0">
				<Image
					src="/salada-ravanello.png"
					width={400}
					height={400}
					quality={100}
					alt=""
				/>
			</div>
			<div className="w-full flex-1 flex-col space-y-6">
				<p className="font-medium text-gray-300 text-4xl">Salada Ravanello</p>
				<p className="text-gray-300 text-2xl font-light">
					Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O
					pão naan dá um toque especial.
				</p>
				<ul className="flex flex-row flex-wrap gap-2 text-gray-300 text-sm *:rounded-md *:bg-blue-900 *:px-3 *:py-1 ">
					<li>alface</li>
					<li>cebola</li>
					<li>pão naan</li>
					<li>pepino</li>
					<li>rabanete</li>
					<li>tomate</li>
				</ul>

				<div className="w-full flex flex-row space-x-4">
					<div className="flex flex-row items-center justify-center space-x-4">
						<Button variant="ghost" className="text-white hover:bg-white/70">
							<Minus className="size-6" strokeWidth={2} />
						</Button>
						<span className="text-white">1</span>
						<Button variant="ghost" className="text-white hover:bg-white/70">
							<Plus className="size-6" strokeWidth={2} />
						</Button>
					</div>
					<Button variant="gold">
						{`Incluir - ${currencyFormatter.format(Number(25))}`}
					</Button>
				</div>
			</div>
		</div>
	);
}
