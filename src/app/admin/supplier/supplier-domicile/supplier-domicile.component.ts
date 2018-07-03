import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Domicilio } from '../../../register/domicilio/domicilio';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'supplier-domicile',
  templateUrl: './supplier-domicile.component.html',
  styleUrls: ['./supplier-domicile.component.css']
})
export class SupplierDomicileComponent implements OnInit {
  private zipCodeUrl = 'https://api-codigos-postales.herokuapp.com/v2/codigo_postal/';
  public zipCode: string;
  public address: Domicilio;
  public toggle: boolean;
  public arrow: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.address = {
      municipio: '',
      colonias: [],
      ciudad : '',
      numero_exterior: 0,
      numero_interior: 0,
      estado: "",
      calle: "",
      codigo_postal: 0
    };
    this.arrow = 'fa-chevron-right';
  }

  getAddress(): void {
    this.http.get<Domicilio>(this.zipCodeUrl + this.zipCode)
      .subscribe((data) => {
        this.address = {
          ciudad : data.ciudad,
          municipio : data.municipio,
          colonias : data.colonias,
          estado : data.estado,
          calle: data.calle,
          codigo_postal : data.codigo_postal,
          numero_exterior : 0,
          numero_interior : 0
        };
      });
  }

  getArrowClass() {
    console.log(this.toggle);
    if (this.toggle) {
      return 'fa-chevron-down';
    } else {
      return 'fa-chevron-right';
    }
  }

  toggleArrow() {
    this.toggle = !this.toggle;
    this.arrow = this.getArrowClass();
  }

  // EVENTS
  onSearchClicked() {
    this.getAddress();
  }
}
