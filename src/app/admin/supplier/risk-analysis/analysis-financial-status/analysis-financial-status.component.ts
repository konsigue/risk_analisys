import { Component, OnInit } from '@angular/core';
import { FinancialSituationModel } from '../../models/FinancialSituationModel';
import { FiscalStatusModel } from '../../models/FiscalStatusModel';

@Component({
  selector: 'analysis-financial-status',
  templateUrl: './analysis-financial-status.component.html',
  styleUrls: ['./analysis-financial-status.component.css']
})
export class AnalysisFinancialStatusComponent implements OnInit {
  public fiscalStatus: FiscalStatusModel
  public financialSituation: FinancialSituationModel[]

  constructor() {
    this.fiscalStatus = new FiscalStatusModel()
    this.financialSituation = new Array(4)

    this.financialSituation = [
      { 
        Name: "2016", InmediateLiquidity: "1.88", MediateLiquidity: "2.07", 
        FinancialAppeceament: "1.05", TotalActives: "29419", TotalSales: "49110",
        Uafirda: "-762"
      },
      {
        Name: "2017", InmediateLiquidity: "2.34", MediateLiquidity: "2.48", 
        FinancialAppeceament: "0.75", TotalActives: "26714", TotalSales: "60263",
        Uafirda: "2222"
      },
      {
        Name: "Variación", InmediateLiquidity: "0.46", MediateLiquidity: "0.41", 
        FinancialAppeceament: "-0.30", TotalActives: "-9.19%", TotalSales: "22.71%",
        Uafirda: "391.60%" 
      },
      {
        Name: "Tendencia", InmediateLiquidity: "estable", MediateLiquidity: "estable", 
        FinancialAppeceament: "estable", TotalActives: "negativa", TotalSales: "positiva",
        Uafirda: "positiva" 
      },
    ]  
  }

  ngOnInit() {

  }

}
