import { Domicilio } from '../../register/domicilio/domicilio';

export class Supplier {
    id: number;
    RFC: string;
    commercial_name: string;
    legal_name: string;
    description: string;
    city: string;
    type: string;
    focus: string;
    domicile: Domicilio;

    // tslint:disable-next-line:max-line-length
    constructor(id: number, RFC: string, name: string, razon_social: string, description: string, city: string, type: string, focus: string , domicilio: Domicilio) {
        this.id = id;
        this.RFC = RFC;
        this.commercial_name = name;
        this.legal_name = razon_social;
        this.description = description;
        this.city = city;
        this.type = type;
        this.focus = focus;
        this.domicile = domicilio;
    }
}
