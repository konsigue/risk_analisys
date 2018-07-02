export class Item {
    state: string;
    status: string;
    faType: string;

    constructor(state: string, status: string) {
        this.state = state;
        this.status = status;
        this.faType = "fa fa-close"
    }
}
