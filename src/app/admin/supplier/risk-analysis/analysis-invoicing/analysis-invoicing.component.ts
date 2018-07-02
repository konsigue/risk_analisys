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
  public lineChartData:Array<any>;
  public lineChartLabels:Array<any>;
  public lineChartOptions:any
  public lineChartColors:Array<any>
  public lineChartLegend:boolean;
  public lineChartType:string;

  constructor() {
  }

  ngOnInit() {
    this.data = new Array<InvoiceDataModel>()
    this.invoiceModel = new InvoicingModel()

    // lineChart
    this.lineChartData = this.invoiceModel.ChartData;
    this.lineChartLabels = this.invoiceModel.ChartLabels;
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
