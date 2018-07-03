import { Component, OnInit } from '@angular/core';
import { FinancialAlgorithmModel } from '../models/FinancialAlgorithmModel';
import { FinancialAnalysisAssetsModel } from '../models/FinancialAnalysisAssetsModel';

@Component({
  selector: 'analysis-financial',
  templateUrl: './analysis-financial.component.html',
  styleUrls: ['./analysis-financial.component.css']
})
export class AnalysisFinancialComponent implements OnInit {
  public financialAlgorithm: FinancialAlgorithmModel[]
  public financialAssets: FinancialAnalysisAssetsModel[]

  constructor() { }

  ngOnInit() {
    this.financialAlgorithm = []
    this.financialAssets = []

    /** mock */
    this.financialAlgorithm = [
      { Time: "2017", Value: 7.36 },
      { Time: "Últimos 12 meses", Value: 11.55 }
    ]
    this.financialAssets = [
      {Time:"2016",CashFlow:-752,AccountingCapital:14320,NetSales:49110,TotalAssets:29419},
      {Time:"2017",CashFlow:2424,AccountingCapital:15268,NetSales:60263,TotalAssets:26714},
      {Time:"Últimos 12 meses",CashFlow:18737,AccountingCapital:19184,NetSales:82147,TotalAssets:30630}
    ]
    /** end mock */
  }

}
