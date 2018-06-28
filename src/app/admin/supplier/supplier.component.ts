import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  provider_name = 'Soluciones Digitales Rubio Haro y asociados.';
  provider_description = 'Empresa dedicada a la consultoria sobre informatica.';

  constructor() { }

  ngOnInit() {
  }

}
