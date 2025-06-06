import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function ItemsForm() {
    return (
        <>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name='email' type="email" placeholder="name@example.com" />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                        Olvidó su contraseña?
                    </a>
                </div>
                <Input id="password" name='password' type="password" placeholder="••••••••" />
            </div>

           

            <Button className="w-full bg-red-600 hover:bg-red-800 text-white cursor-pointer">Iniciar Sesión</Button>
            


        </>
    )
}
