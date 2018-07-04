import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  state
} from '@angular/animations';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-supplier-analysis',
  templateUrl: './supplier-analysis.component.html',
  styleUrls: ['./supplier-analysis.component.css'],
  animations: [
    trigger('clicked', [
      state('inactive', style({
        backgroundColor: '#fff',
        color: '#000000',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#006ADE',
        color: '#fff',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
  ]
})
export class SupplierAnalysisComponent implements OnInit {
  public supplierName: string;

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.supplierName = params.get('name');
    });
  }

  onNavChange(e: string) {
    this.router.navigate(['admin/proveedores/' + this.supplierName + '/analisis/' + e], { replaceUrl : true });
  }

}
