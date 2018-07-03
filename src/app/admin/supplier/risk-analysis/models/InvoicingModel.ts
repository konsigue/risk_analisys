export class InvoicingModel {
    public ChartLabels: string[]
    public ChartData: InvoiceDataModel[]
    public TotalData: number

    InvoicingModel() {
        this.ChartLabels = []
        this.ChartData = []
    }
}

export class InvoiceDataModel {
    data: number[]
    label: string
}