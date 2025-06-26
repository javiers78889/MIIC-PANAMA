"use client"
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'

type TRadio = {
  readonly setSelected: React.Dispatch<React.SetStateAction<string>>,
  readonly selected: string
}

const plans = [
  { name: 'Nivel Exploratorio' },
  { name: 'Nivel Descriptivo' },
  { name: 'Nivel Explicativo' },
]

export default function RadioButton({ setSelected, selected }: TRadio) {


  return (
    <div className="w-full px-4">
      <h2>Seleccione el nivel de investigación</h2>
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="space-y-2">
          {plans.map((plan) => (
            <Radio
              key={plan.name}
              value={plan.name}
            
              className={`group relative flex cursor-pointer rounded-lg bg-white/5 px-5 py-4 text-black shadow-xl transition focus:not-data-focus:outline-none data-checked:bg-green-500  data-focus:outline data-focus:outline-white `}
            >
              <div className="flex w-full items-center justify-between">
                <div className="text-sm/6">
                  <p className="font-semibold  data-checked:text-white">{plan.name}</p>

                </div>
                <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-checked:opacity-100" />
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}
