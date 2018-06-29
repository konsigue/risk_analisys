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
        this.supplier = {
          id_supplier: data.id_supplier,
          rfc: data.rfc,
          commercial_name: data.commercial_name,
          legal_name: data.legal_name,
          company_type: data.company_type,
          commercial_business: data.commercial_business,
          domicile: this.getAdress(),
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
      commercial_name: '',
      legal_name: '',
      company_type: '',
      commercial_business: '',
      domicile : this.getAdress()
    };

    this.getSupplier();
  }

}
