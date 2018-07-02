import { Component, OnInit } from '@angular/core';
import { Supplier } from './supplier';
import { Domicilio } from '../../register/domicilio/domicilio';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})

export class SupplierComponent implements OnInit {
  private SupplierURL = 'http://localhost:3000/summary';
  private SupplierFinalURL;
  public id = 1;
  supplier: Supplier;
  adress = {
    codigo_postal: 7020,
    estado: 'CDMX',
    municipio: 'GAM',
    ciudad: 'CDMX',
    colonias: ['Tepeyac Insurgentes'],
    numero_exterior: 12,
    numero_interior: null,
  };

  getAdress() {
    return <Domicilio>(this.adress);
  }

  getSupplier(): void {
    this.SupplierFinalURL = this.SupplierURL + '?id=' + this.id;
    this.http.get<Supplier>(this.SupplierFinalURL).subscribe(
      data => {
        // console.log(data.commercial_name);
        // console.log(this.SupplierFinalURL);
        // console.log(data);
        // console.log(data[0].city);
        this.supplier = {
          id_supplier: data.id_supplier,
          commercial_name: data[0].commercial_name,
          rfc: null,
          legal_name: null,
          company_type: null,
          commercial_business: null,
          domicile: null,
        };
      }
    );
  }

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

    this.supplier = {
      id_supplier: null,
      rfc: '',
      commercial_name: 'Cargando...',
      legal_name: '',
      company_type: '',
      commercial_business: '',
      domicile : this.getAdress()
    };

    this.getSupplier();
  }

}
