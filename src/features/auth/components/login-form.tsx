import { Button } from "@/shared/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { businessName } from "@/shared/constants/business"
import { Trophy } from "lucide-react"
import Link from "next/link"

export const LoginForm = () => {
    return <div className="flex items-center justify-center flex-col gap-8">

        <div className="flex items-center gap-2 text-primary">
            <Trophy size={30} strokeWidth='3px'/>
            <div className="text-4xl font-bold">
                <span className="text-foreground">{businessName[0]}</span>
                <span >{businessName[1]}</span>
            </div>
        </div>

    <Card className="w-md">
        <CardHeader className="flex flex-col items-center">
            <CardTitle className="text-3xl">
                Acesso administrativo
            </CardTitle>

            <CardDescription>
                Insira suas credenciais para gerenciar seu negócio
            </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Label htmlFor="email">
                    <span>E-mail</span>
                </Label>

                <Input id="email" type="email" placeholder="admin@arenasync.com"/>
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="password">
                 <span>Senha</span>
                </Label>
                <Input id="password" type="password" placeholder="Digite sua senha"/>

                <Link href='' className="self-end text-xs mt-1">Esqueceu sua senha?</Link>
            </div>

        </CardContent>

        <CardFooter className="flex gap-4 flex-col pb-10">
            <Button className="w-full" >
                Login
            </Button>
        </CardFooter>
    </Card>

    </div>
}