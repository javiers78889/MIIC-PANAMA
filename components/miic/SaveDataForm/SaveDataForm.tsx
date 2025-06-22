import { Input } from '@/components/ui/input'
import { investigacionSchemaType } from '@/src'
import React from 'react'

type TResult = {
    readonly state: investigacionSchemaType
}

export default function SaveDataForm({ state }: TResult) {
    return (
        <div hidden>
            <Input type="text" name='ppi' defaultValue={state["1. Pregunta Principal de Investigación (P.P.I)"]} />
            <Input type="text" name='og' defaultValue={state["2. Objetivo General"]} />
            <Input type="text" name='tp' defaultValue={state["3. Título del Proyecto"]} />
            <Input type="text" name='hp' defaultValue={state["4. Hipótesis"]} />
            <Input type="text" name='hpn' defaultValue={state["5. Hipótesis Nula"]} />
            <Input type="text" name='ps1' defaultValue={state["6. Pregunta Secundaria 1"]} />
            <Input type="text" name='ps2' defaultValue={state["7. Pregunta Secundaria 2"]} />
            <Input type="text" name='ps3' defaultValue={state["8. Pregunta Secundaria 3"]} />
            <Input type="text" name='oe1' defaultValue={state["9. Objetivo Específico 1"]} />
            <Input type="text" name='oe2' defaultValue={state["10. Objetivo Específico 2"]} />
            <Input type="text" name='oe3' defaultValue={state["11. Objetivo Específico 3"]} />
        </div>
    )
}
