import { Component, OnInit } from '@angular/core';
import { Domicilio } from '../../../register/domicilio/domicilio';

@Component({
  selector: 'supplier-domicile',
  templateUrl: './supplier-domicile.component.html',
  styleUrls: ['./supplier-domicile.component.css']
})
export class SupplierDomicileComponent implements OnInit {
  private zipCodeUrl = "https://api-codigos-postales.herokuapp.com/v2/codigo_postal/"
  public zipCode: string;
  public address: Domicilio;

  constructor() { }

  ngOnInit() {
    this.address = {
      ciudad: "",
      municipio: "",
      colonias: [],
      numero_exterior: 0,
      numero_interior: 0,
      estado: "",
      codigo_postal: 0
    };
  }
}
