import { Component, OnInit } from '@angular/core';
import { Supplier } from './supplier';
import { DomicilioComponent } from '../../register/domicilio/domicilio.component';
import { Domicilio } from '../../register/domicilio/domicilio';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  supplier;
  adress = {
    codigo_postal: 7020,
    estado: 'CDMX',
    municipio: 'GAM',
    ciudad: 'CDMX',
    colonias: ['Tepeyac Insurgentes'],
    numero_exterior: 12,
    numero_interior: null,
  };

  getAdress() {
    return <Domicilio>(this.adress);
  }

  getSupplier() {
    // tslint:disable-next-line:max-line-length
    return new Supplier(1, 'RHD990710RUB', 'Rubio Haro Digital', 'Servicios Digitales Rubio Haro S.A. de C.V.', 'Empresa que brinda servicios y soluciones digitales con un enfoque de crecimiento para las pymes', 'CDMX', 'Tecnológica', 'Consultorias digitales', this.getAdress());
  }


  constructor() {
    this.supplier = this.getSupplier();
  }

  ngOnInit() {
  }

}
