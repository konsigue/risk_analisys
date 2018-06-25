import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-supplier-analysis',
  templateUrl: './supplier-analysis.component.html',
  styleUrls: ['./supplier-analysis.component.css']
})
export class SupplierAnalysisComponent implements OnInit {
  public supplier: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.supplier = params.get('name');
    });
  }

}
