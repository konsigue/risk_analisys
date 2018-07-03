export class FinanceInstitution {
    id_institution: number;
    name: string;
    type: string;
    last_12_months_amount: string;

    // tslint:disable-next-line:max-line-length
    constructor(id_institution: number, name: string, type: string, last_12_months_amount: string ) {
        this.id_institution = id_institution;
        this.name = name;
        this.type = type;
        this.last_12_months_amount = last_12_months_amount;
    }
}
