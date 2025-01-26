"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { currencyFormatter } from "@/lib/currency";
import { ChevronRight, Heart, Minus, Pencil, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export function FoodiesList() {
	return (
		<section id="products" className="w-full flex flex-col space-y-8 py-4">
			<div className="w-full max-w-[1440px] items-center justify-center flex flex-col space-y-4">
				<Carousel
					opts={{
						align: "start",
					}}
					className="w-full "
				>
					<CarouselContent>
						<CarouselItem className="w-full h-fit md:basis-1/2 lg:basis-1/3">
							<div className="p-1">
								<Card className="flex flex-col border-2 border-yellow-900 bg-yellow-700">
									<CardContent className="w-full flex flex-col aspect-square items-center justify-center space-y-2 pt-0">
										<div className="w-full flex items-center justify-end">
											<Button
												variant="ghost"
												size="icon"
												className=" hover:bg-yellow-600"
											>
												<Heart
													strokeWidth={1.5}
													className="size-8 fill-none text-white"
												/>
											</Button>
											<Button
												variant="ghost"
												size="icon"
												className=" hover:bg-yellow-600"
												asChild
											>
												<Link href="/products/id/edit">
													<Pencil
														strokeWidth={1.5}
														className="size-8  text-white"
													/>
												</Link>
											</Button>
										</div>
										<div className=" w-[180px] h-[180px] shrink-0 aspect-square rounded-full overflow-hidden">
											<Image
												src="/salada-ravanello.png"
												width={180}
												height={180}
												alt=""
											/>
										</div>

										<div className="w-full flex items-center justify-center">
											<Link
												href="/products/id"
												className="w-full flex flex-row items-center justify-center font-bold hover:text-yellow-400 text-white text-2xl"
											>
												Salada Ravanello
												<ChevronRight className="size-8 ml-2 " />
											</Link>
										</div>
										<div className="flex text-gray-300 items-center justify-center font-light text-center">
											descrição do produto
										</div>
										<p className="w-full flex items-center justify-center text-center text-4xl text-yellow-400 py-2 ">
											{currencyFormatter.format(Number(25))}
										</p>
									</CardContent>
									<CardFooter className="w-full flex items-center justify-center flex-row space-x-1">
										<div className="w-full flex flex-row items-center justify-center text-white font-medium text-lg space-x-2">
											<Button variant="ghost" className="hover:bg-white/80">
												<Minus />
											</Button>
											<p>1</p>
											<Button variant="ghost" className="hover:bg-white/80">
												<Plus />
											</Button>
										</div>
										<Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
											Incluir
										</Button>
									</CardFooter>
								</Card>
							</div>
						</CarouselItem>
						<CarouselItem className="w-full h-fit md:basis-1/2 lg:basis-1/3">
							<div className="p-1">
								<Card className="flex flex-col border-2 border-yellow-900 bg-yellow-700">
									<CardContent className="w-full flex flex-col aspect-square items-center justify-center space-y-2 pt-0">
										<div className="w-full flex items-center justify-end">
											<Button
												variant="ghost"
												size="icon"
												className=" hover:bg-yellow-600"
											>
												<Heart
													strokeWidth={1.5}
													className="size-8 fill-none text-white"
												/>
											</Button>
											<Button
												variant="ghost"
												size="icon"
												className=" hover:bg-yellow-600"
												asChild
											>
												<Link href="/products/id/edit">
													<Pencil
														strokeWidth={1.5}
														className="size-8  text-white"
													/>
												</Link>
											</Button>
										</div>
										<div className=" w-[180px] h-[180px] shrink-0 aspect-square rounded-full overflow-hidden">
											<Image
												src="/salada-ravanello.png"
												width={180}
												height={180}
												alt=""
											/>
										</div>

										<div className="w-full flex items-center justify-center">
											<Link
												href="/products/id"
												className="w-full flex flex-row items-center justify-center font-bold hover:text-yellow-400 text-white text-2xl"
											>
												Salada Ravanello
												<ChevronRight className="size-8 ml-2 " />
											</Link>
										</div>
										<div className="flex text-gray-300 items-center justify-center font-light text-center">
											descrição do produto
										</div>
										<p className="w-full flex items-center justify-center text-center text-4xl text-yellow-400 py-2 ">
											{currencyFormatter.format(Number(25))}
										</p>
									</CardContent>
									<CardFooter className="w-full flex items-center justify-center flex-row space-x-1">
										<div className="w-full flex flex-row items-center justify-center text-white font-medium text-lg space-x-2">
											<Button variant="ghost" className="hover:bg-white/80">
												<Minus />
											</Button>
											<p>1</p>
											<Button variant="ghost" className="hover:bg-white/80">
												<Plus />
											</Button>
										</div>
										<Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
											Incluir
										</Button>
									</CardFooter>
								</Card>
							</div>
						</CarouselItem>
						<CarouselItem className="w-full h-fit md:basis-1/2 lg:basis-1/3">
							<div className="p-1">
								<Card className="flex flex-col border-2 border-yellow-900 bg-yellow-700">
									<CardContent className="w-full flex flex-col aspect-square items-center justify-center space-y-2 pt-0">
										<div className="w-full flex items-center justify-end">
											<Button
												variant="ghost"
												size="icon"
												className=" hover:bg-yellow-600"
											>
												<Heart
													strokeWidth={1.5}
													className="size-8 fill-none text-white"
												/>
											</Button>
											<Button
												variant="ghost"
												size="icon"
												className=" hover:bg-yellow-600"
												asChild
											>
												<Link href="/products/id/edit">
													<Pencil
														strokeWidth={1.5}
														className="size-8  text-white"
													/>
												</Link>
											</Button>
										</div>
										<div className=" w-[180px] h-[180px] shrink-0 aspect-square rounded-full overflow-hidden">
											<Image
												src="/salada-ravanello.png"
												width={180}
												height={180}
												alt=""
											/>
										</div>

										<div className="w-full flex items-center justify-center">
											<Link
												href="/products/id"
												className="w-full flex flex-row items-center justify-center font-bold hover:text-yellow-400 text-white text-2xl"
											>
												Salada Ravanello
												<ChevronRight className="size-8 ml-2 " />
											</Link>
										</div>
										<div className="flex text-gray-300 items-center justify-center font-light text-center">
											descrição do produto
										</div>
										<p className="w-full flex items-center justify-center text-center text-4xl text-yellow-400 py-2 ">
											{currencyFormatter.format(Number(25))}
										</p>
									</CardContent>
									<CardFooter className="w-full flex items-center justify-center flex-row space-x-1">
										<div className="w-full flex flex-row items-center justify-center text-white font-medium text-lg space-x-2">
											<Button variant="ghost" className="hover:bg-white/80">
												<Minus />
											</Button>
											<p>1</p>
											<Button variant="ghost" className="hover:bg-white/80">
												<Plus />
											</Button>
										</div>
										<Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
											Incluir
										</Button>
									</CardFooter>
								</Card>
							</div>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</section>
	);
}
