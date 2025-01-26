import { Content } from "@/components/content";
import { GoBackButton } from "@/components/go-back-button";
import { HeaderTitle } from "@/components/header-title";
import { ProductForm } from "../../product-form";

interface EditProductPageProps {
	params: Promise<{
		id: string;
	}>;
}
export default async function EditProductPage({
	params,
}: EditProductPageProps) {
	const id = (await params).id;

	return (
		<section id="product" className="w-full flex-1 text-white">
			<Content className="flex-col items-start">
				<GoBackButton url="/" />
				<HeaderTitle>Editar prato</HeaderTitle>
				<ProductForm id={id} isEditable={true} />
			</Content>
		</section>
	);
}
