import { Domicilio } from '../../register/domicilio/domicilio';

/* */
export class Supplier {

    id_supplier: number;
    rfc: string;
    commercial_name: string;
    legal_name: string;
    company_type: string;
    commercial_business: string;
    domicile: Domicilio;

    // tslint:disable-next-line:max-line-length
    constructor(id_supplier: number, rfc: string, name: string, razon_social: string, company_type: string, commercial_business: string, domicilio: Domicilio) {
        this.id_supplier = id_supplier;
        this.rfc = rfc;
        this.commercial_name = name;
        this.legal_name = razon_social;
        this.company_type = company_type;
        this.commercial_business = commercial_business;
        this.domicile = domicilio;
    }
}
