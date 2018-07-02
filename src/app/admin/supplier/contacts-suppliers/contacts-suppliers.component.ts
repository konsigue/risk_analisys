import { Component, OnInit } from '@angular/core';
import { CONTACTOS } from '../../../register/contacts/contactos';

@Component({
  selector: 'app-contacts-suppliers',
  templateUrl: './contacts-suppliers.component.html',
  styleUrls: ['./contacts-suppliers.component.css']
})
export class ContactsSuppliersComponent implements OnInit {

  contactos = CONTACTOS;

  constructor() { }

  ngOnInit() {
  }

}
