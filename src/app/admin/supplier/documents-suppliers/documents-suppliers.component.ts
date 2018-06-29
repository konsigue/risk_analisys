import { Component, OnInit, Inject } from '@angular/core';
import { Item } from './documentState';
import {
  trigger,
  transition,
  animate,
  style,
  state
} from '@angular/animations';


@Component({
  selector: 'app-documents-suppliers',
  templateUrl: './documents-suppliers.component.html',
  styleUrls: ['./documents-suppliers.component.css'],
  animations: [
    trigger('clicked', [
      state('inactive', style({
        backgroundColor: '#423737',
        color: '#fff',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#34a346',
        color: '#fff',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
  ],
})
export class DocumentsSuppliersComponent implements OnInit {

  constructor() {
    for (let i = 0; i < 3; i++) {
      // console.log(i);
      this.states[i] = new Item('inactive', 'Rechazado');
      // console.log(this.states[i]);
    }
  }

  public states = new Array(3);

  toggleState(n: number) {
    if (this.states[n].state === 'active') {
      this.states[n].state = 'inactive';
      this.states[n].status='Rechazado';
    } else if (this.states[n].state === 'inactive') {
      this.states[n].state = 'active';
      this.states[n].status='Aceptado';
    }
  }

  ngOnInit() {
  }

}
