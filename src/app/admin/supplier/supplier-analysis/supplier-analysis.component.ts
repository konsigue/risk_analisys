import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FiscalStatusModel } from '../models/FiscalStatusModel';

@Component({
  selector: 'app-supplier-analysis',
  templateUrl: './supplier-analysis.component.html',
  styleUrls: ['./supplier-analysis.component.css']
})
export class SupplierAnalysisComponent implements OnInit {
  public supplier: string
  public fiscalStatus: FiscalStatusModel

  constructor(private route: ActivatedRoute) {
    this.fiscalStatus = new FiscalStatusModel();
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.supplier = params.get('name');
    });
  }

}
