const verificarPrimo = (numero:number):boolean => {
    for(let i = 2; i < numero; i++){
        if(numero % i === 0) return false
    }

    return numero !== 1
}

export const obtenerPrimos = (numero:number):number[] => {
    const primos = []

    for(let secuencia = 2; secuencia <= numero; secuencia++){
        if(verificarPrimo(secuencia)) primos.push(secuencia)
    }

    return primos.sort((a, b) => {
        return b - a
    })
}