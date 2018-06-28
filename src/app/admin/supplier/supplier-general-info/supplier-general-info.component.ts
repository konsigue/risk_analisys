import { Component, OnInit } from '@angular/core';
import { SupplierComponent } from '../supplier.component';

@Component({
  selector: 'app-supplier-general-info',
  templateUrl: './supplier-general-info.component.html',
  styleUrls: ['./supplier-general-info.component.css']
})
export class SupplierGeneralInfoComponent extends SupplierComponent {

  constructor() {
    super();
  }


}
