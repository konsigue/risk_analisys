export interface Domicilio {
    codigo_postal: number,
    estado: string,
    calle: string,
    municipio: string,
    ciudad: string,
    colonias: string[],
    numero_exterior: number,
    numero_interior: number
}