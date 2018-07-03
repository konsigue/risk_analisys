export class InvoicingModel {
    ChartLabels: string[]
    ChartData: InvoiceDataModel[]
    TotalData: number

    InvoicingModel() {
        this.ChartLabels = []
        this.ChartData = []
    }
}

export class InvoiceDataModel {
    data: number[]
    label: string
}