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
        token: z.string(),
        message:z.string()
})