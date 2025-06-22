import { Input } from '@/components/ui/input'
import { investigacionSchemaType } from '@/src'
import React from 'react'

type TResult = {
    readonly state: investigacionSchemaType
}

export default function SaveDataForm({ state }: TResult) {
    return (
        <div hidden>
            <Input type="text" name='ppi' value={state["1. Pregunta Principal de Investigación (P.P.I)"]} />
            <Input type="text" name='og' value={state["2. Objetivo General"]} />
            <Input type="text" name='tp' value={state["3. Título del Proyecto"]} />
            <Input type="text" name='hp' value={state["4. Hipótesis"]} />
            <Input type="text" name='hpn' value={state["5. Hipótesis Nula"]} />
            <Input type="text" name='ps1' value={state["6. Pregunta Secundaria 1"]} />
            <Input type="text" name='ps2' value={state["7. Pregunta Secundaria 2"]} />
            <Input type="text" name='ps3' value={state["8. Pregunta Secundaria 3"]} />
            <Input type="text" name='oe1' value={state["9. Objetivo Específico 1"]} />
            <Input type="text" name='oe2' value={state["10. Objetivo Específico 2"]} />
            <Input type="text" name='oe3' value={state["11. Objetivo Específico 3"]} />
        </div>
    )
}
