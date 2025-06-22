type TItemForm = {
    subproblemas: string[];
    manejarCambio: (index: number, valor: string) => void;
    eliminarSubproblema: (index: number) => void;
    agregarSubproblema: () => void;

    causas: string[];
    agregarCausa: () => void;
    manejarCambioCausa: (index: number, valor: string) => void;
    eliminarSubcausa: (index: number) => void;

    value3: string;
    handleChange3: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setShowSuggestions3: React.Dispatch<React.SetStateAction<boolean>>;
    showSuggestions3: boolean;
    handleSelect3: (palabra: string) => void;

    value2: string;
    handleChange2: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setShowSuggestions2: React.Dispatch<React.SetStateAction<boolean>>;
    showSuggestions2: boolean;
    handleSelect2: (palabra: string) => void;

    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
    showSuggestions: boolean;
    handleSelect: (palabra: string) => void;
    setValue3: React.Dispatch<React.SetStateAction<string>>;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    setValue2: React.Dispatch<React.SetStateAction<string>>;


}

export default TItemForm