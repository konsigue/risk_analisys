import { Component, OnInit } from '@angular/core';
import { Supplier } from '../supplier';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supplier-general-info',
  templateUrl: './supplier-general-info.component.html',
  styleUrls: ['./supplier-general-info.component.css']
})

export class SupplierGeneralInfoComponent implements OnInit {
  private SupplierURL = 'http://localhost:3000/summary';
  private SupplierFinalURL;
  public id = 1;
  supplier: Supplier;

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
      commercial_name: '',
      legal_name: '',
      company_type: '',
      commercial_business: '',
      domicile: null
    };

    this.getSupplier();
  }
}
