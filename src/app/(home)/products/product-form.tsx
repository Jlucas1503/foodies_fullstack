import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ProductFormProps {
	id?: string;
	isEditable?: boolean;
}
export function ProductForm({ id, isEditable }: ProductFormProps) {
	return (
		<form className="w-full flex flex-col text-gray-300 gap-4">
			<div className="w-full flex flex-col md:flex-row gap-4">
				<div className="w-full">
					<Label>Imagem do prato</Label>
					<Input className="w-full" type="file" />
				</div>
				<div className="w-full">
					<Label>Nome</Label>
					<Input />
				</div>
				<div className="w-full">
					<Label>Categoria</Label>
					<Input />
				</div>
			</div>
			<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="w-full md:col-span-2">
					<Label>Ingredientes</Label>
					<Input className="w-full" />
				</div>
				<div className="w-full md:col-span-1">
					<Label>Preço</Label>
					<Input className="w-full" type="currency" />
				</div>
			</div>

			<div className="w-full flex flex-col md:flex-row gap-4">
				<div className="w-full">
					<Label>Descrição</Label>
					<Textarea className="w-full" />
				</div>
			</div>
			<div className="w-full flex flex-col md:flex-row justify-end mt-4 gap-4">
				<Button className="bg-blue-900 hover:bg-blue-800 font-medium text-sm text-white">
					Excluir prato
				</Button>
				<Button variant="gold" className="font-medium text-sm">
					Salvar alterações
				</Button>
			</div>
		</form>
	);
}
