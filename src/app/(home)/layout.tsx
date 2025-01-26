import { Footer } from "@/components/footer";
import { HeaderNav } from "@/components/header-nav";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Foodies",
	description: "Gerado no curso de MVP do PPgCTI",
};

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="w-full min-h-screen flex flex-col items-center bg-gray-900">
			<HeaderNav />
			{children}
			<Footer />
		</main>
	);
}
