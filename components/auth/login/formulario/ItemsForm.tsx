
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React from 'react'


type Props = {
    readonly children?: React.ReactNode;
};
export default function ItemsForm({children}: Props) {
    return (
        <>
            <div className="space-y-2 text-sm dark:text-black">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name='email' type="email" placeholder="name@example.com" />
            </div>
            {children}

            <div className="space-y-2 text-sm dark:text-black">
                <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                   
                </div>
                <Input id="password" name='password' type="password" placeholder="••••••••" />
            </div>



            



        </>
    )
}
