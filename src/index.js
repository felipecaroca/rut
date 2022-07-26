const cleanRut = (rut) => `${rut}`.toLocaleLowerCase().replace(/[^0-9k]/g, '').toUpperCase()

const formatRut = (rut) => {
    rut = cleanRut(rut)

    let dv

    if (rut.length > 2) {
        dv = rut[rut.length - 1]
        rut = rut.substr(0, rut.length - 1)
        rut = parseInt(rut).toLocaleString('es-CL')
        rut = `${rut}-${dv}`.toUpperCase()
    }

    return rut
}

const validateRut = (rut) => {
    let valid = false

    try {
        rut = cleanRut(rut)

        let rutAux = parseInt(rut.substring(0, rut.length - 1))
        const dv = rut.charAt(rut.length - 1)
        let m = 0,
            s = 1

        for (; rutAux; rutAux = Math.floor(rutAux / 10))
            s = (s + (rutAux % 10) * (9 - (m++ % 6))) % 11
        valid = (s > 0 ? (s - 1).toString() : 'K') === dv
    } catch (error) {
        console.error(error)
    }

    return valid
}



module.exports = { cleanRut, formatRut, validateRut }
