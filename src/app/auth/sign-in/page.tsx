import { Content } from "@/components/content";
import { Logo } from "@/components/logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInForm } from "./sign-in-form";

export default function SignIn() {
	return (
		<section
			id="sign-in"
			className="w-full min-h-screen flex items-center justify-center bg-gray-900"
		>
			<Content className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">
				<div className="w-full flex items-center justify-center ">
					<Logo size={100} />
				</div>
				<Card className="w-full max-w-md border-none bg-blue-950 items-center justify-center">
					<CardHeader>
						<CardTitle className="text-white text-center">Faça login</CardTitle>
					</CardHeader>
					<CardContent className="w-full">
						<SignInForm />
					</CardContent>
				</Card>
			</Content>
		</section>
	);
}
