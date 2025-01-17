import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function seed() {
	await prisma.favorite.deleteMany();
	await prisma.item.deleteMany();
	await prisma.order.deleteMany();
	await prisma.product.deleteMany();
	await prisma.category.deleteMany();
	await prisma.user.deleteMany();

	const passwordHash = bcrypt.hashSync("e@123456", 10);

	const user = await prisma.user.create({
		data: {
			name: "Waldelino Duarte",
			email: "waldelino@gmail.com",
			passwordHash,
			role: "ADMIN",
		},
	});
	const user2 = await prisma.user.create({
		data: {
			name: "John Doe",
			email: "john.doe@fake.com",
			passwordHash,
			role: "GUEST",
		},
	});

	const category1 = await prisma.category.create({
		data: {
			name: "Refeições",
		},
	});

	const category2 = await prisma.category.create({
		data: {
			name: "Sobremesas",
		},
	});

	const category3 = await prisma.category.create({
		data: {
			name: "Bebidas",
		},
	});

	await prisma.product.createMany({
		data: [
			{
				name: "Salada Ravanello",
				categoryId: category1.id,
				description:
					"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
				ingredients: [
					"Alface",
					"Cebola",
					"Pão Naan",
					"Pepino",
					"Rabanete",
					"Tomate",
				],
				price: 49.97,
				image: "salada-ravanello.png",
			},
			{
				name: "Spaguetti Gambe",
				categoryId: category1.id,
				description: "Massa fresca com camarões e pesto",
				ingredients: [
					"Camarão",
					"Cebola",
					"Macarrão",
					"Pepino",
					"Rabanete",
					"Tomate",
				],
				price: 79.97,
				image: "spaguetti-gambe.png",
			},
			{
				name: "Salada Molla",
				categoryId: category1.id,
				description: "Salada fresca com pesto",
				ingredients: ["Alface", "Cebola", "Pepino", "Rabanete", "Tomate"],
				price: 79.97,
				image: "salada-molla.png",
			},
			{
				name: "Torradas de Parma",
				categoryId: category1.id,
				description:
					"Presunto de parma e rúcula em um pão com fermentação natural.",
				ingredients: ["Presunto", "Rúcula", "Pão"],
				price: 25.97,
				image: "torradas-de-parma.png",
			},
			{
				name: "Prugna Pie",
				categoryId: category2.id,
				description:
					"Torta de ameixa com massa amanteigada, polvilho em açúcar.",
				ingredients: ["Ameixa", "Açúcar", "Manteiga"],
				price: 79.97,
				image: "prugna-pie.png",
			},
			{
				name: "Espresso",
				categoryId: category3.id,
				description: "Café cremoso feito na temperatura e pressões perfeitas.",
				ingredients: ["Café", "Açúcar", "Leite"],
				price: 15.97,
				image: "espresso.png",
			},
		],
	});
}

seed().then(() => {
	console.log("Database seeded!");
});
