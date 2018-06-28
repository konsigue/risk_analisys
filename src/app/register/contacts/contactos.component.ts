import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataRegisterService } from '../../data-register.service';

import { CONTACTOS } from './contactos';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  tipoPersona: any;
  url = '';

  constructor(private router: Router, private _dataRegisterService: DataRegisterService) {
    this._dataRegisterService.dataString$.subscribe(
      data => {
        if (this.tipoPersona !== data) {
          this.tipoPersona = data;
        }
      });
  }

  contactos = CONTACTOS;

  tipo() {
    if (this.tipoPersona === 0) {
      this.router.navigate(['registro/tarjeta']);
    } else if (this.tipoPersona === 1) {
      this.router.navigate(['registro/ciec']);
    }
  }

  ngOnInit() {
  }

}
