import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Domicilio } from './domicilio';
import { DomicilioService } from './domicilio.service';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css'],
})
export class DomicilioComponent implements OnInit {
  public zipCode: string;
  public address: Domicilio;

  constructor(private http: HttpClient, private service: DomicilioService) { }

  ngOnInit() {
    this.address = {
      municipio: '',
      ciudad: '',
      colonias: [],
      calle: '',
      numero_exterior: 0,
      numero_interior: 0,
      estado: '',
      codigo_postal: 0
    };
  }

  getAddress(): void {
    this.service.getAddress(this.zipCode)
      .subscribe((data) => {
        this.address = {
          ciudad: '',
          municipio: data.municipio,
          colonias: data.colonias,
          estado: data.estado,
          calle: '',
          codigo_postal: data.codigo_postal,
          numero_exterior: 0,
          numero_interior: 0
        };
      });
  }

  // EVENTS
  onSearchClicked() {
    this.getAddress();
  }
}
