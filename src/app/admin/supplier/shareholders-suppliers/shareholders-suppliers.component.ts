import { Component, OnInit } from '@angular/core';
import { DomicilioService } from '../../../register/domicilio/domicilio.service';
import { HttpClient } from '@angular/common/http';
import { Domicilio } from '../../../register/domicilio/domicilio';
import { Shareholder } from './shareholderModel';
import { ShareholderService } from './shareholder.service';

@Component({
  selector: 'app-shareholders-suppliers',
  templateUrl: './shareholders-suppliers.component.html',
  styleUrls: ['./shareholders-suppliers.component.css'],
})
export class ShareholdersSuppliersComponent implements OnInit {

  mostrar = false;
  public zipCode: string;
  public domicilio: Domicilio;
  public shareholder: Shareholder;

  constructor(private _dataDomicilioService: DomicilioService, private http: HttpClient, private _shareholderService: ShareholderService) {
    this.domicilio = {
      municipio: "",
      ciudad : "",
      colonias: [],
      numero_exterior: 0,
      numero_interior: 0,
      estado: "",
      codigo_postal: 0
    };
   }

  toggleShow(mostrar: boolean) {
    this.mostrar = mostrar;
  }

  getAddress() {
    this._dataDomicilioService.getAddress(this.zipCode).subscribe((data) => {
      this.domicilio = {
        municipio : data.municipio,
        ciudad : "",
        colonias : data.colonias,
        estado : data.estado,
        codigo_postal : data.codigo_postal,
        numero_exterior : 0,
        numero_interior : 0
      };
    });
  }

  adjustPercentage() {
    let percentage = (<HTMLInputElement>document.getElementById("porcentaje"));
    if (percentage.valueAsNumber >= 100) {
      percentage.valueAsNumber = 100;
    } else if (percentage.valueAsNumber <= 0) {
      percentage.valueAsNumber = 0;
    }
  }

  ngOnInit() {

    this._shareholderService.getShareholder().subscribe((data) => {
      this.shareholder = {
        nombre: data[0].nombre,
        rfc: data[0].rfc,
        domicilio: data[0].domicilio,
        participacion: data[0].participacion,
        firma: data[0].firma,
        puesto_politico: data[0].puesto_politico,
        documentos: data[0].documentos,
      };
      console.log(this.shareholder);
    });

  }
}
