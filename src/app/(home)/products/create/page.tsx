import { Content } from "@/components/content";
import { GoBackButton } from "@/components/go-back-button";
import { HeaderTitle } from "@/components/header-title";
import { ProductForm } from "../product-form";

export default async function CreateProductPage() {
	return (
		<section id="product" className="w-full flex-1">
			<Content className="flex-col items-start">
				<GoBackButton url="/" />
				<HeaderTitle>Adicionar novo prato</HeaderTitle>
				<ProductForm />
			</Content>
		</section>
	);
}
