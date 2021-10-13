import { useState,useMemo } from "react";
import { UserShortInterface } from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidationServices";

export default function useIndex() {
    const [cep, setCep] = useState('')
    const [erro, setErro] = useState('')
    const [buscaFeita, setBuscaFeita] = useState(true)
    const [carregando, setCarregando] = useState(false)
    const [diaristas, setDiaristas] = useState([] as UserShortInterface[])
    const [diaristasRestantes, setDiaristasRestantes] = useState(0)
    const cepValido = useMemo(() => ValidationService.cep(cep), [cep])

    return {
        cep, setCep
    }
}