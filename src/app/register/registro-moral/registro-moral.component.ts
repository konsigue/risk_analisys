import { Component, OnInit } from '@angular/core';
import { Supplier } from '../../admin/supplier/supplier';

@Component({
  selector: 'app-registro-moral',
  templateUrl: './registro-moral.component.html',
  styleUrls: ['./registro-moral.component.css']
})

export class RegistroMoralComponent implements OnInit {
  model = new Supplier(0, '', '', '', '', '', null);
  public c: boolean;
  public types = [];
  supplier: Supplier;

  onSubmit() {
    // console.log('inciando submit');
  }

  constructor() { }

  /**
   * Validador de RFC para personas Morales
   * Solo estructura del RFC.
   */
  // public Validador_RFC_Moral(RFC: string) {
  //   const regexRFC = /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{3}))?$/;
  //   // console.log('El RFC es:' + RFC);
  //   // console.log('La longitud del RFC es:' + RFC.length);
  //   // console.log('La fecha es:' + RFC.substring(3, 9));
  //   // console.log('rfc validado con regex:' + validado);
  //   const validado = regexRFC.test(RFC);
  //   return validado;
  // }



  ngOnInit() {
    // console.log(this.Validador_RFC_Moral('SDR180710OPP'));
    const msj_clean = '';

    this.types = [
      { id: 1, type: 'Tecnologia' },
      { id: 2, type: 'Comercial' },
      { id: 3, type: 'Educación' },
      { id: 4, type: 'Ventas' },
      { id: 5, type: 'Petrolera' },
      { id: 6, type: 'Arquitectura' },
      { id: 7, type: 'Entrenimiento' },
      { id: 8, type: 'Construcción' },
      { id: 9, type: 'Servicio' },
      { id: 10, type: 'Diseño y marca' },
      { id: 11, type: 'Farmaceutica' },
      { id: 12, type: 'Ingenieria industrial' },
      { id: 13, type: 'Gobierno' },
      { id: 14, type: 'Agropecuario' },
      { id: 15, type: 'Ganadero' },
    ];

    this.supplier = {
      id_supplier: null,
      rfc: msj_clean,
      commercial_name: msj_clean,
      legal_name: msj_clean,
      company_type: msj_clean,
      commercial_business: msj_clean,
      domicile: null
    };
  }

}
