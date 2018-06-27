import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FiscalStatusModel } from '../models/FiscalStatusModel';
import { FinancialSituationModel } from '../models/FinancialSituationModel';

@Component({
  selector: 'app-supplier-analysis',
  templateUrl: './supplier-analysis.component.html',
  styleUrls: ['./supplier-analysis.component.css']
})
export class SupplierAnalysisComponent implements OnInit {
  public supplier: string
  public fiscalStatus: FiscalStatusModel
  public financialSituation: FinancialSituationModel[]

  constructor(private route: ActivatedRoute) {
    this.fiscalStatus = new FiscalStatusModel()
    this.financialSituation = Array(4);
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
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.supplier = params.get('name')
    });
  }

}
