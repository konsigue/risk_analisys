import { Domicilio } from "../../../register/domicilio/domicilio";

export interface Shareholder {
    nombre: string,
    rfc: string,
    domicilio: Domicilio,
    participacion: number,
    firma: boolean,
    puesto_politico: boolean,
    documentos: string,

}