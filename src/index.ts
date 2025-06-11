import z from 'zod'


export const ResponseSchema = z.object({

        pPrincipal: z.string().nonempty({ message: 'La pregunta principal no puede ir vacia' }),


})


export const LoginSchema = z.object({
        email: z.string().email({ message: 'Ingrese un correo válido' }),
        password: z.string().nonempty({ message: 'El password no puede ir vacío' })
})


export const ErrorSchema = z.object({
        message: z.string()
})


export const successSchema = z.object({
        token: z.string().optional(),
        message: z.string()
})

export type SuccessType = z.infer<typeof successSchema>


export const CreateAccountSchema = z.object({

        email: z.string().email({ message: 'Ingrese un correo válido' }),
        confirm_email: z.string().email({ message: 'Ingrese un correo válido' }),
        password: z.string().min(6, { message: 'El password debe tener al menos 6 caracteres' }),
        confirm_password: z.string().min(6, { message: 'El password debe tener al menos 6 caracteres' }),
        name: z.string().nonempty({ message: 'El nombre no puede ir vacío' }),
        lastname: z.string().nonempty({ message: 'El apellido no puede ir vacío' }),
        cedula: z.string().nonempty({ message: 'La cedula no puede ir vacía' }),
}).refine((data) => data.email === data.confirm_email, { message: 'Los correos no coinciden' })
        .refine((data) => data.password === data.confirm_password, { message: 'Las contraseñas no coinciden' })



export const validateEmailSchema = z.object({
        email: z.string().email({ message: 'Email no válido' })
})

export const newDataSchema = z.object({
        token: z.string().min(1, { message: 'El token no es válido' }),
        password: z.string().nonempty({ message: 'La contraseña no puede ir vacia' }),
        confirm_password: z.string().nonempty({ message: 'La contraseña no puede ir vacia' }),

}).refine(e => e.password === e.confirm_password, { message: 'Las password no coinciden' })