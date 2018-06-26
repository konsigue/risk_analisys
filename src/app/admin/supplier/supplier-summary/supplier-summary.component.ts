import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'supplier-summary',
  templateUrl: './supplier-summary.component.html',
  styleUrls: ['./supplier-summary.component.css']
})
export class SupplierSummaryComponent implements OnInit {

  provider_name = 'Soluciones Digitales Rubio Haro y asociados.';
  provider_description = 'Empresa dedicada a la consultoria sobre informatica, redes, software y tecnologia en general para empresas y entornos empresariales.';

  constructor() { }

  ngOnInit() {
  }

}
