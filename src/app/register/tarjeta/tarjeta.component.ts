import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  state
} from '@angular/animations';
import { Item } from './opcion'

@Component({
  selector: 'app-targeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
  animations: [
    trigger('clicked', [
      state('inactive', style({
        backgroundColor: '#495057',
        color: '#fff',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#aac111',
        color: '#000000',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
  ]
})
export class TarjetaComponent implements OnInit {

  constructor() {
    this.states[0]= new Item('inactive', false);
    this.states[1]= new Item('active', true);
   }

  public states = new Array(2);

  toggleState(n:number) {
    this.states[n].state='active';
    this.states[n].mostrar=true;
    for(let i = 0;i<2;i++) {
      if(i!=n){
        this.states[i].state = 'inactive';
        this.states[i].mostrar=false;
      }
   }
  }

  ngOnInit() {
  }

}

