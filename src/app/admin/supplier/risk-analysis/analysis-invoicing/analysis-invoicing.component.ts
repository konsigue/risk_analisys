import { Component, OnInit } from '@angular/core';
import { InvoicingModel, InvoiceDataModel } from '../models/InvoicingModel';
import { IssuedInvoicesModel } from '../models/IssuedInvoicesModel';
import { CancelledInvoicesModel } from '../models/CancelledInvoicesModel';

@Component({
  selector: 'analysis-invoicing',
  templateUrl: './analysis-invoicing.component.html',
  styleUrls: ['./analysis-invoicing.component.css']
})
export class AnalysisInvoicingComponent implements OnInit {

  public data: InvoiceDataModel[]
  public totalInvoices: InvoicingModel
  public issuedInvoices: IssuedInvoicesModel[]
  public cancelledInvoices: CancelledInvoicesModel[]

  // lineChart
  public lineChartOptions:any
  public lineChartColors:Array<any>
  public lineChartLegend:boolean;
  public lineChartType:string;

  constructor() {

  }

  ngOnInit() {
    this.data = new Array<InvoiceDataModel>()
    this.totalInvoices = new InvoicingModel()
    this.issuedInvoices = []
    this.cancelledInvoices = []

    /* Mock */
    this.totalInvoices.ChartLabels = ['2017-04','2017-05','2017-06','2017-07','2017-08','2017-09',
      '2017-10','2017-11','2017-12','2018-01','2018-02','2018-03']
    this.totalInvoices.ChartData = [
      { label: 'Facturación', data: [90,782,0,974,443,436,518,1460,3399,3433,111,91] }
    ]
    this.totalInvoices.TotalData = 11737
    this.issuedInvoices = [
      { Name: "Últimos 12 meses", InvoiceRevenue: 121183, InvoiceCredit: 788, NumberRevenue: 2229,
        NumberCredit: 25 },
      { Name: "2017", InvoiceRevenue: 107039, InvoiceCredit: 714, NumberRevenue: 2204, NumberCredit: 14 },
      { Name: "2016", InvoiceRevenue: 75199, InvoiceCredit: 4221, NumberRevenue: 2629, NumberCredit: 27 }
    ]
    this.cancelledInvoices = [
      { Period: "Últimos 12 meses", CancelledSum : 31891, CancelledSumPercentage: 26.1, 
        CancelledInvoices: 94, CancelledInvoicesPercentage: 4.2 },
      { Period: "2017", CancelledSum : 23741, CancelledSumPercentage: 22, CancelledInvoices: 99, 
        CancelledInvoicesPercentage: 4.5 },
      { Period: "2016", CancelledSum : 2997, CancelledSumPercentage: 3.7, CancelledInvoices: 33, 
        CancelledInvoicesPercentage: 1.2 }
    ]
    /* End mock */

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
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
