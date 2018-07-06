import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Domicile } from './domicile';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'supplier-domicile',
  templateUrl: './supplier-domicile.component.html',
  styleUrls: ['./supplier-domicile.component.css']
})
export class SupplierDomicileComponent implements OnInit {
  private SupplierURL = 'http://localhost:3000/domicile';
  private SupplierFinalURL;
  public id = 1;

  private zipCodeUrl = 'https://api-codigos-postales.herokuapp.com/v2/codigo_postal/';
  public zipCode: string;
  public address: Domicile;
  public toggle: boolean;
  public arrow: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const msj_loading = 'Cargando...';
    this.address = {
      street: msj_loading,
      street_number: msj_loading,
      adress_details: msj_loading,
      zone: msj_loading,
      town: msj_loading,
      city: msj_loading,
      state: msj_loading,
      zip_code: msj_loading,
      country: msj_loading,
    };
    this.arrow = 'fa-chevron-right';
    this.getAddress();
  }

  getAddress(): void {
    this.SupplierFinalURL = this.SupplierURL + '?id=' + this.id;
    this.http.get<Domicile>(this.SupplierFinalURL)
      .subscribe((data) => {
        console.log(data.zip_code);
        this.address = {
          street: data.street,
          street_number: data.street_number,
          adress_details: data.adress_details,
          zone: data.zone,
          town: data.town,
          city: data.city,
          state: data.state,
          zip_code: data.zip_code,
          country: data.country,
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
