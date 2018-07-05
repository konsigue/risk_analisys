import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TableDetail } from './table-detail';

import { InvoicingModel, InvoiceDataModel } from '../models/InvoicingModel';
import { IssuedInvoicesModel } from '../models/IssuedInvoicesModel';
import { CancelledInvoicesModel } from '../models/CancelledInvoicesModel';

@Component({
  selector: 'app-analysis-compliance',
  templateUrl: './analysis-compliance.component.html',
  styleUrls: ['./analysis-compliance.component.css'],
  animations: [
    trigger('detailExpand', [
      transition(':enter', [
        animate('225ms', style({ transform: 'translateY(3%)'}))
      ]),
      transition(':leave', [
        animate('150ms', style({ transform: 'translateY(-5%)'}))
      ]),
    ]),
  ],
})
export class AnalysisComplianceComponent implements OnInit {

  public tableDetails: TableDetail[]=[];

  // lineChart
  public lineChartOptions:any
  public lineChartColors:Array<any>
  public lineChartLegend:boolean;
  public lineChartType:string;

  public data: InvoiceDataModel[]
  public totalInvoices: InvoicingModel
  public issuedInvoices: IssuedInvoicesModel[]
  public cancelledInvoices: CancelledInvoicesModel[]

  public doughnutChartLabelsPresentadas:string[] = ['Declaraciones presentadas', 'Declaraciones no presentadas'];
  public doughnutChartDataPresentadas:number[] = [92.31,7.69];

  public doughnutChartLabelsTiempo:string[] = ['Declaraciones presentadas', 'Declaraciones no presentadas'];
  public doughnutChartDataTiempo:number[] = [75,25];

  public doughnutChartLabelsPago:string[] = ['Declaraciones presentadas', 'Declaraciones no presentadas'];
  public doughnutChartDataPago:number[] = [91.67,8.33];

  public doughnutChartLabelsContra:string[] = ['Declaraciones presentadas', 'Declaraciones no presentadas'];
  public doughnutChartDataContra:number[] = [16.67,83.33];

  public doughnutChartColors: any[] = [{ backgroundColor: ["#949fb1", "#4d5360", "#a4c73c", "#a4add3"] }];
  public doughnutChartType:string = 'doughnut';

  constructor() {
    this.tableDetails[0]= new TableDetail('active', false);
    this.tableDetails[1]= new TableDetail('active', false);
  }

  
    // events
    public chartClicked(e:any):void {
      console.log(e);
    }
  
    public chartHovered(e:any):void {
      console.log(e);
    }

  toogleShow(n:number){
    if(this.tableDetails[n].mostrar==false){
      this.tableDetails[n].mostrar=true;
      this.tableDetails[n].state='expanded';
    }else if (this.tableDetails[n].mostrar==true){
      this.tableDetails[n].mostrar=false;
      this.tableDetails[n].state='collapsed';
    }
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
      { label: 'IMSS', data: [100,203,100,0,100,204,100,204,100,204,0,300] },
      { label: 'Infonavit', data: [0,0,0,200,0,0,0,0,0,0,0,0] }
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

}
