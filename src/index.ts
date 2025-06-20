import z from 'zod'


export const ResponseSchema = z.object({
        causa: z.string().nonempty({ message: 'La causa no puede ir vacía' }),
        problema: z.string().nonempty({ message: 'El problema no puede ir vacío' }),
        sujeto: z.string().nonempty({ message: 'El sujeto no puede ir vacío' }),
        contexto: z.string().nonempty({ message: 'El contexto no puede ir vacío' }),
        verbo: z.string().nonempty({ message: 'El verbo no puede ir vacío' }),
        v1: z.string().nonempty({ message: 'El verbo para objetivos 1 no puede ir vacío' }),
        v2: z.string().nonempty({ message: 'El verbo para objetivos 2 no puede ir vacío' }),
        v3: z.string().nonempty({ message: 'El verbo para objetivos 3 no puede ir vacío' }),
        preposicion: z.string().nonempty({ message: 'La preposición no puede ir vacía' }),
        interrogante: z.string().nonempty({ message: 'La interrogante no puede ir vacía' }),
        i1: z.string().nonempty({ message: 'La interrogante para objetivo 1 no puede ir vacía' }),
        i2: z.string().nonempty({ message: 'La interrogante para objetivo 2 no puede ir vacía' }),
        i3: z.string().nonempty({ message: 'La interrogante para objetivo 2 no puede ir vacía' }),
        subproblemas: z.array(z.string()).optional(),
        subcausas: z.array(z.string()).optional(),
}).refine(e => {
        const subproblemasOk = !!e.subproblemas?.length;
        const subcausasOk = !!e.subcausas?.length;
        return (subproblemasOk && subcausasOk) || (!subproblemasOk && !subcausasOk);
}, {
        message: 'Si agrega subproblemas también debe agregar subcausas y viceversa',
        path: ['subproblemas'] // puedes apuntar a una propiedad para que el error se muestre allí
});


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



export const investigacionSchema = z.object({
        '1. Pregunta Principal de Investigación (P.P.I)': z.string(),
        '2. Objetivo General': z.string(),
        '3. Título del Proyecto': z.string(),
        '4. Hipótesis': z.string(),
        '5. Hipótesis Nula': z.string(),
        '6. Pregunta Secundaria 1': z.string(),
        '7. Pregunta Secundaria 2': z.string(),
        '8. Pregunta Secundaria 3': z.string(),
        '9. Objetivo Específico 1': z.string(),
        '10. Objetivo Específico 2': z.string(),
        '11. Objetivo Específico 3': z.string()
});

export type investigacionSchemaType = z.infer<typeof investigacionSchema>