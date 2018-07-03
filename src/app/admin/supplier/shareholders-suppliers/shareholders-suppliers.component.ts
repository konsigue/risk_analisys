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
  public shareholders: Shareholder[] = [];
  public dir="";

  constructor(private _dataDomicilioService: DomicilioService, private http: HttpClient, private _shareholderService: ShareholderService) {
    this.domicilio = {
      municipio: "",
      ciudad : "",
      colonias: [],
      numero_exterior: 0,
      numero_interior: 0,
      calle: "",
      estado:"",
      codigo_postal: 0
    };
    
    this.shareholder = {
      nombre: "",
      rfc: "",
      domicilio: this.domicilio ,
      participacion: 0,
      firma: false,
      puesto_politico: false,
      documentos: "",
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
        calle : data.calle,
        estado: data.estado,
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
      for(let i=0; i<Object.keys(data).length; i++){
        this.shareholder = {
          nombre: data[i].nombre,
          rfc: data[i].rfc,
          domicilio: data[i].domicilio,
          participacion: data[i].participacion,
          firma: data[i].firma,
          puesto_politico: data[i].puesto_politico,
          documentos: data[i].documentos,
        };
        this.shareholders.push(this.shareholder);
      }
      //this.dir=this.shareholder.domicilio.calle+" "+this.shareholder.domicilio.numero_exterior;
    });

  }
}
