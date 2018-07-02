import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supplier-general-info',
  templateUrl: './supplier-general-info.component.html',
  styleUrls: ['./supplier-general-info.component.css']
})

export class SupplierGeneralInfoComponent implements OnInit {
  private SupplierURL = 'http://localhost:3000/general_supplier_info';
  private SupplierFinalURL;
  public img_link;
  public id = 1;
  supplier: Supplier;

  getSupplier(): void {
    this.SupplierFinalURL = this.SupplierURL + '?id=' + this.id;
    this.http.get<Supplier>(this.SupplierFinalURL).subscribe(
      data => {
        this.img_link = (data[0].img_link);
        // console.log(data.commercial_name);
        // console.log(this.SupplierFinalURL);
        // console.log(data);
        // console.log(data[0].city);
        this.supplier = {
          id_supplier: data[0].id_supplier,
          rfc: data[0].rfc,
          commercial_name: data[0].commercial_name,
          legal_name: data[0].legal_name,
          company_type: data[0].company_type,
          commercial_business: data[0].commercial_business,
          domicile: null,
        };
      }
    );
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const msj_loading = 'Cargando...';
    this.supplier = {
      id_supplier: null,
      rfc: msj_loading,
      commercial_name: msj_loading,
      legal_name: msj_loading,
      company_type: msj_loading,
      commercial_business: msj_loading,
      domicile: null
    };

    this.getSupplier();
  }
}
