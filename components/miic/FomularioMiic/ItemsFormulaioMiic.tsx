"use client"

import React, { ChangeEvent, useActionState, useEffect, useState, useTransition } from 'react'
import SubProblemaMiic from '../SubProblemaMiic'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SubCausasMiic from '../SubCausasMiic'
import InterrogantesMiic from '../InterrogantesMiic'
import VerbosMiic from '../VerbosMiic'
import PreposicionesMiic from '../PreposicionesMiic'
import ButtonSend from '@/components/widgets/ButtonSend'
import TItemForm from '@/src/types'
import InterrogantesMiic1 from '../InterrogantesMiic copy'
import InterrogantesMiic2 from '../InterrogantesMiic copy 3'
import InterrogantesMiic3 from '../InterrogantesMiic copy 2'
import VerbosMiic1 from '../VerbosMiic copy'
import VerbosMiic2 from '../VerbosMiic copy 2'
import VerbosMiic3 from '../VerbosMiic copy 3'
import { Button } from '@/components/ui/button'
import { Brain } from 'lucide-react'
import { SuggestAction } from '@/action/suggest-action'
import { toast } from 'react-toastify'
import Switchs from '@/components/ui/Switch'
import RadioButton from '@/components/ui/RadioButton'



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
    setValue3,
    setValue,
    setValue2
}: TItemForm) {


    const [dataform, setDataForm] = useState({
        preposicionSugerida: '',
        ppi: '',
        i1: '',
        i2: '',
        i3: '',
        verbo: '',
        verboOE1: '',
        verboOE2: '',
        verboOE3: '',
        og: '',
        o1: '',
        o2: '',
        o3: ''
    }
    )
    const [values, setvalue] = useState({
        problema: '',
        causa: '',
        sujeto: '',
        contexto: ''
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setvalue(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    const [enabled, setEnabled] = useState(false)
    const [selected, setSelected] = useState('')
    const inyectar = SuggestAction.bind(null, { ...values, nivel: selected })
    const [state, dispatch] = useActionState(inyectar, { success: [], error: [] })
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (state.error) {
            state.error.map(e => {
                toast.error(e)
            })
        }

        if (state.success[0]) {
            setDataForm({
                preposicionSugerida: state.success[0].preposicionSugerida,
                ppi: state.success[0].ppi,
                i1: state.success[0].i1,
                i2: state.success[0].i2,
                i3: state.success[0].i3,
                verbo: state.success[0].verbo,
                verboOE1: state.success[0].verboOE1,
                verboOE2: state.success[0].verboOE2,
                verboOE3: state.success[0].verboOE3,
                og: state.success[0].verbo,
                o1: state.success[0].verboOE1,
                o2: state.success[0].verboOE2,
                o3: state.success[0].verboOE3,
            }
            )

        }

        if (state.error) {
            state.error.map(e => {
                toast.error(e)

            })
        }

    }, [state])

    useEffect(() => {

    }, [selected])
    const onSubmit = () => {
        startTransition(() => {
            dispatch()
            setSelected('')
            setEnabled(false)
        })

    }
    useEffect(() => {
        setValue3(dataform.ppi)
    }, [dataform.i1])


    useEffect(() => {
        setValue(dataform.preposicionSugerida)
    }, [dataform.preposicionSugerida])
    useEffect(() => {
        setValue2(dataform.og)
    }, [dataform.og])

    return (
        <>
            <div className="space-y-4">
                <div className="space-y-1">
                    <Label htmlFor="title">¿CUÁL ES EL PROBLEMA O EFECTO?  <span className="text-xl font-bold text-gray-500">B</span></Label>
                    <Input
                        name="problema"
                        className="bg-white dark:text-black w-full p-3 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500"
                        id="title"
                        onChange={onChange}
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
                        onChange={onChange}
                        className="bg-white dark:text-black w-full p-3 px-5 my-2 border border-gray-300 focus:border-gray-700 outline-none transition duration-500"
                        placeholder="Ejemplo: Experiencia laboral"

                    />
                </div>

                {/*SubCausas*/}
                <SubCausasMiic causas={causas} agregarCausa={agregarCausa} manejarCambioCausa={manejarCambioCausa} eliminarSubcausa={eliminarSubcausa} />
            </div>

            <div className="space-y-1">
                <Label htmlFor="title">¿CUÁL ES EL SUJETO DE ESTUDIO?  <span className="text-xl font-bold text-gray-500">S.E</span></Label>
                <Input name='sujeto' onChange={onChange} className='bg-white dark:text-black w-full p-3 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500' id="title" placeholder="Ejemplo: Estudiantes" />
            </div>

            <div className="space-y-1">
                <Label htmlFor="title">¿CUÁL ES EL CONTEXTO DONDE SE DESARROLLARÁ LA INVESTIGACIÓN?  <span className="text-xl font-bold text-gray-500">C</span></Label>
                <Input name='contexto' onChange={onChange} className='bg-white dark:text-black w-full p-3 px-5 my-2 border-1 border-gray-300 focus:border-gray-700 outline-none transition duration-500' id="title" placeholder="Ejemplo: ISAE Universidad" />
            </div>


            {/*Sugerir*/}

            <Switchs enabled={enabled} setEnabled={setEnabled} />

            {
                isPending
                    ? <Button
                        type="button"
                        className="bg-purple-700 text-white hover:bg-purple-900 cursor-pointer font-bold uppercase"
                        onClick={onSubmit}
                        disabled={isPending}
                    >
                        Pensando...<Brain />
                    </Button>
                    : (

                        !enabled ? ('') : (
                            <>
                                <RadioButton selected={selected} setSelected={setSelected} />

                                <Button
                                    type="button"
                                    className="bg-purple-700 text-white hover:bg-purple-900 cursor-pointer font-bold uppercase"
                                    onClick={onSubmit}
                                >
                                    Sugerir con IA <Brain />
                                </Button>
                            </>
                        )
                    )
            }

            {/*LAS PREPOSICIONES*/}
            <PreposicionesMiic value={value} handleChange={handleChange} setShowSuggestions={setShowSuggestions} showSuggestions={showSuggestions} handleSelect={handleSelect} />
            {/*LAS INTERROGANTES*/}
            <InterrogantesMiic value3={value3} handleChange3={handleChange3} setShowSuggestions3={setShowSuggestions3} showSuggestions3={showSuggestions3} handleSelect3={handleSelect3} />
            <InterrogantesMiic1 dataform={dataform} />
            <InterrogantesMiic2 dataform={dataform} />
            <InterrogantesMiic3 dataform={dataform} />


            {/*LOS VERBOS*/}
            <VerbosMiic  value2={value2} handleChange2={handleChange2} setShowSuggestions2={setShowSuggestions2} showSuggestions2={showSuggestions2} handleSelect2={handleSelect2} />
            <VerbosMiic1 dataform={dataform} />
            <VerbosMiic2 dataform={dataform} />
            <VerbosMiic3 dataform={dataform} />



            {/*LBOTON DE ENVIO*/}
            <ButtonSend>Obtener Resultado</ButtonSend>

        </>
    )
}
