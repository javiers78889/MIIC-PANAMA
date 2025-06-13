import React from 'react'
import SubProblemaMiic from '../SubProblemaMiic'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SubCausasMiic from '../SubCausasMiic'
import InterrogantesMiic from '../InterrogantesMiic'
import VerbosMiic from '../VerbosMiic'
import PreposicionesMiic from '../PreposicionesMiic'
import ButtonSend from '@/components/widgets/ButtonSend'
import TItemForm from '@/src/types'



export default function ItemsFormulaioMiic({
    subproblemas,
    manejarCambio,
    eliminarSubproblema,
    agregarSubproblema,
    causas,
    agregarCausa,
    manejarCambioCausa,
    eliminarSubcausa,
    value3,
    handleChange3,
    setShowSuggestions3,
    showSuggestions3,
    handleSelect3,
    value2,
    handleChange2,
    setShowSuggestions2,
    showSuggestions2,
    handleSelect2,
    value,
    handleChange,
    setShowSuggestions,
    showSuggestions,
    handleSelect,
}: TItemForm) {
    return (
        <>
            <div className="space-y-4">
                <div className="space-y-1">
                    <Label htmlFor="title">¿CUÁL ES EL PROBLEMA O EFECTO?  <span className="text-xl font-bold text-gray-500">B</span></Label>
                    <Input
                        name="problema"
                        className="bg-white dark:text-black w-full p-3 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500"
                        id="title"
                        placeholder="Ejemplo: Desempleo"
                      
                    />
                </div>

                {/* Mostrar los subproblemas solo después de agregar */}
                <SubProblemaMiic subproblemas={subproblemas} manejarCambio={manejarCambio} eliminarSubproblema={eliminarSubproblema} agregarSubproblema={agregarSubproblema} />
            </div>


            <div className="space-y-4">
                {/* Campo principal de causa */}
                <div className="space-y-1">
                    <Label htmlFor="causa">¿CUÁL ES UNA POSIBLE CAUSA?  <span className="text-xl font-bold text-gray-500">A</span></Label>
                    <Input
                        name="causa"
                        id="causa"
                        className="bg-white dark:text-black w-full p-3 px-5 my-2 border border-gray-300 focus:border-gray-700 outline-none transition duration-500"
                        placeholder="Ejemplo: Experiencia laboral"
                        
                    />
                </div>

                {/*SubCausas*/}
                <SubCausasMiic causas={causas} agregarCausa={agregarCausa} manejarCambioCausa={manejarCambioCausa} eliminarSubcausa={eliminarSubcausa} />
            </div>

            <div className="space-y-1">
                <Label htmlFor="title">¿CUÁL ES EL SUJETO DE ESTUDIO?  <span className="text-xl font-bold text-gray-500">S.E</span></Label>
                <Input name='sujeto' className='bg-white dark:text-black w-full p-3 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500' id="title" placeholder="Ejemplo: Estudiantes"  />
            </div>

            <div className="space-y-1">
                <Label htmlFor="title">¿CUÁL ES EL CONTEXTO DONDE SE DESARROLLARÁ LA INVESTIGACIÓN?  <span className="text-xl font-bold text-gray-500">C</span></Label>
                <Input name='contexto' className='bg-white dark:text-black w-full p-3 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500' id="title" placeholder="Ejemplo: ISAE Universidad"  />
            </div>


            {/*LAS INTERROGANTES*/}
            <InterrogantesMiic value3={value3} handleChange3={handleChange3} setShowSuggestions3={setShowSuggestions3} showSuggestions3={showSuggestions3} handleSelect3={handleSelect3} />


            {/*LOS VERBOS*/}
            <VerbosMiic value2={value2} handleChange2={handleChange2} setShowSuggestions2={setShowSuggestions2} showSuggestions2={showSuggestions2} handleSelect2={handleSelect2} />


            {/*LAS PREPOSICIONES*/}
            <PreposicionesMiic value={value} handleChange={handleChange} setShowSuggestions={setShowSuggestions} showSuggestions={showSuggestions} handleSelect={handleSelect} />

            {/*LBOTON DE ENVIO*/}
            <ButtonSend>Obtener Resultado</ButtonSend>

        </>
    )
}
