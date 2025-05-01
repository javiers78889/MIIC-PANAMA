import z from 'zod'


export const ResponseSchema = z.object({

        Pprincipal: z.string().nonempty({message:'La pregunta principal no puede ir vacia'}) ,
        objPrincipal:z.string().nonempty({message:'El objetivo general no puede ir vacio'}) ,
        titulo: z.string().nonempty({message:'El titulo no puede ir vacio'}),
        hipotesis:z.string().nonempty({message:'La hipotesis no puede ir vacia'}),
        hipotesis_nula:z.string().nonempty({message:'La hipotesis nul no puede ir vacia'}) 
    
})