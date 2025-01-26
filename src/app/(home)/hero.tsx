import Image from "next/image";
export function Hero() {
	return (
		<section
			id="hero"
			className="w-full h-full flex flex-1 items-start justify-center p-12 "
		>
			<div className="w-full max-w-[1440px] h-[400px] flex items-end p-12 relative rounded-lg overflow-hidden">
				<div className="w-full flex flex-col z-30">
					<p className="text-white text-4xl font-medium">
						Sabores inigualáveis
					</p>
					<p className="text-white ">
						Sinta o cuidado do preparo com ingredientes selecionados
					</p>
				</div>
				<Image
					src="/banner.png"
					fill={true}
					alt="prato de salada com frutas"
					className="w-full inset-0 flex object-cover object-center absolute z-0"
				/>
			</div>
		</section>
	);
}
