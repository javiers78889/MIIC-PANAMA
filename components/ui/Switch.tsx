import { Switch } from '@headlessui/react'
type TEnable = {
    readonly enabled: boolean,
    readonly setEnabled: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Switchs({ enabled, setEnabled }: TEnable) {


    return (
        <div className='flex gap-2 flex-row items-center justify-center'>
            <h2>¿ Usar IA?</h2>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-400 border-1 p-1 ease-in-out focus:not-data-focus:outline-none data-checked:bg-green-500 data-focus:outline data-focus:outline-gray-700"
            >
                <span
                    aria-hidden="true"
                    className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out group-data-checked:translate-x-7 "
                />
            </Switch>
        </div>
    )
}