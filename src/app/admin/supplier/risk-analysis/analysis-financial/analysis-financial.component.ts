import { Component, OnInit } from '@angular/core';
import { FinancialAlgorithmModel } from '../models/FinancialAlgorithmModel';

@Component({
  selector: 'analysis-financial',
  templateUrl: './analysis-financial.component.html',
  styleUrls: ['./analysis-financial.component.css']
})
export class AnalysisFinancialComponent implements OnInit {
  public financialAlgorithm: FinancialAlgorithmModel[]

  constructor() { }

  ngOnInit() {
    this.financialAlgorithm = []

    /** mock */
    this.financialAlgorithm = [
      { Time: "2017", Value: 7.36 },
      { Time: "Últimos 12 meses", Value: 11.55 }
    ]
    /** end mock */
  }

}
