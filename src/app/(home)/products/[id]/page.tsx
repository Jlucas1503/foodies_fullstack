import { Content } from "@/components/content";
import { GoBackButton } from "@/components/go-back-button";
import { ProductDetailed } from "./product-detailed";

export default async function ViewProductPage() {
	return (
		<section id="product" className="w-full flex-1">
			<Content className="flex-col items-start">
				<GoBackButton url="/" />
				<ProductDetailed />
			</Content>
		</section>
	);
}
