import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.address = {
      municipio: "",
      colonias: [],
      numero_exterior: 0,
      numero_interior: 0,
      estado: "",
      codigo_postal: 0
    };
  }

  getAddress(): void {
    this.http.get<Domicilio>(this.zipCodeUrl + this.zipCode)
      .subscribe((data) => {
        this.address = {
          ciudad : data.ciudad,
          municipio : data.municipio,
          colonias : data.colonias,
          estado : data.estado,
          codigo_postal : data.codigo_postal,
          numero_exterior : 0,
          numero_interior : 0
        };
      });
  }

  // EVENTS
  onSearchClicked() {
    this.getAddress();
  }
}
