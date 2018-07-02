export class InvoicingModel {
    ChartLabels: string[]
    ChartData: InvoiceDataModel[]

    InvoicingModel() {
        this.ChartLabels = []
        this.ChartData = []
    }
}

export class InvoiceDataModel {
    data: number[]
    label: string
}