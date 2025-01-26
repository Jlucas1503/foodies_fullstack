import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function SignInForm() {
	return (
		<form className="w-full flex flex-col items-center justify-center space-y-6 text-gray-300">
			<div className="w-full flex flex-col space-y-2">
				<Label htmlFor="email">Email</Label>
				<Input id="email" name="email" type="email" className="bg-gray-600" />
				{/* {errors?.email && (
        <p className="text-xs font-medium text-red-500 dark:text-red-400">
          {errors.email[0]}
        </p>
      )} */}
			</div>
			<div className="w-full flex flex-col space-y-2">
				<Label htmlFor="password">Senha</Label>
				<Input
					id="password"
					name="password"
					type="password"
					className="bg-gray-600"
				/>
				{/* {errors?.password && (
        <p className="text-xs font-medium text-red-500 dark:text-red-400">
          {errors.password[0]}
        </p>
      )} */}
			</div>
			<Button type="submit" variant="gold" className="w-full">
				Sign in with e-mail
			</Button>
			<Button variant="link" className="w-full text-white" size="sm" asChild>
				<Link href="/auth/sign-up">Criar uma conta</Link>
			</Button>
		</form>
	);
}
