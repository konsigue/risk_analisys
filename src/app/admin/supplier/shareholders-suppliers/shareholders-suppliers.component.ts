import { Component, OnInit } from '@angular/core';
import { DomicilioService } from '../../../register/domicilio/domicilio.service';
import { Domicilio } from '../../../register/domicilio/domicilio';

@Component({
  selector: 'app-shareholders-suppliers',
  templateUrl: './shareholders-suppliers.component.html',
  styleUrls: ['./shareholders-suppliers.component.css'],
})
export class ShareholdersSuppliersComponent implements OnInit {

  mostrar = false;
  public zipCode: string;
  public domicilio: Domicilio;

  constructor(private _dataDomicilioService: DomicilioService) {
    this.domicilio = {
      municipio: "",
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
    //console.log(zipCode);
    this._dataDomicilioService.getAddress(this.zipCode).subscribe((data) => {
      this.domicilio = {
        municipio : data.municipio,
        colonias : data.colonias,
        estado : data.estado,
        codigo_postal : data.codigo_postal,
        numero_exterior : 0,
        numero_interior : 0
      };
      console.log(this.domicilio);
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

  }
}
