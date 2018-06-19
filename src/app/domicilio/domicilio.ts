export interface Domicilio {
    codigo_postal: number,
    estado: string,
    municipio: string,
    ciudad: string,
    colonias: string[],
    numero_exterior: number,
    numero_interior: number
}