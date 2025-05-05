import z from 'zod'


export const ResponseSchema = z.object({

        pPrincipal: z.string().nonempty({message:'La pregunta principal no puede ir vacia'}) ,
     
    
})