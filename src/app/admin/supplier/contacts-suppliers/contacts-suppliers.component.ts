import { Component, OnInit } from '@angular/core';
import { CONTACTOS } from '../../../register/contacts/contactos';
import { SupplierContact } from './contact';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts-suppliers',
  templateUrl: './contacts-suppliers.component.html',
  styleUrls: ['./contacts-suppliers.component.css']
})
export class ContactsSuppliersComponent implements OnInit {
  private SupplierURL = 'http://localhost:3000/contactos_empresa';
  private SupplierFinalURL;
  public id = 1;


  public msj_cerrar_form = 'Cerrar formulario';
  public msj_add_contact = 'Agregar contacto';

  contactList: SupplierContact[];
  contactos = CONTACTOS;

  getSupplierContactsList(): void {
    this.SupplierFinalURL = this.SupplierURL + '?id=' + this.id;
    this.http.get<SupplierContact[]>(this.SupplierFinalURL).subscribe(
      data => {
        this.contactList = data;
      }
    );
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getSupplierContactsList();
  }

}
