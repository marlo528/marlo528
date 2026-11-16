//O formato yyy-mm-dd não garante que uma data exista.

export const validarDataRealização = (data) => {
    if(data == null || data === undefined){
        return true
    }

    if(typeof data !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(data)){
        return false
    }

    const [ano, mes , dia] = data.split("-").map(Number)

    if( ano < 1000){
        return false
    }

    if(mes < 1 || mes > 12){
        return false
    }

    const anoBissexto = 
    ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)

    const diasPorMes = [
        31, 
        anoBissexto ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ]

    if(dia < 1 || dia > diasPorMes[mes - 1]){
        return false
    }
    return true
}