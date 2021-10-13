export const ValidationService = {
    cep(cep = ''): boolean {
        const {length} = cep.replace(/\D/g, '')

        return length === 8;
    }
}