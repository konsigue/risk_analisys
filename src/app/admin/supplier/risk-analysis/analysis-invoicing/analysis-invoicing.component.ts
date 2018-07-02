import { Component, OnInit } from '@angular/core';
import { InvoicingModel, InvoiceDataModel } from '../models/InvoicingModel';

@Component({
  selector: 'analysis-invoicing',
  templateUrl: './analysis-invoicing.component.html',
  styleUrls: ['./analysis-invoicing.component.css']
})
export class AnalysisInvoicingComponent implements OnInit {

  public data: InvoiceDataModel[]
  public invoiceModel: InvoicingModel

  // lineChart
  public lineChartOptions:any
  public lineChartColors:Array<any>
  public lineChartLegend:boolean;
  public lineChartType:string;

  constructor() {

  }

  ngOnInit() {
    this.data = new Array<InvoiceDataModel>()
    this.invoiceModel = new InvoicingModel()

    // Mock
    this.invoiceModel.ChartLabels = ['2017-04','2017-05','2017-06','2017-07','2017-08','2017-09',
      '2017-10','2017-11','2017-12','2018-01','2018-02','2018-03']
    this.invoiceModel.ChartData = [
      {label: 'Facturación', data: [90,782,0,974,443,436,518,1460,3399,3433,111,91]}
    ]
    this.invoiceModel.TotalData = 11737

    // lineChart
    this.lineChartOptions = {
      responsive: true
    };
    this.lineChartColors = [
      { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      },
      { // dark grey
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(77,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      }
    ];
    this.lineChartLegend = true;
    this.lineChartType = 'line';
  }

}
