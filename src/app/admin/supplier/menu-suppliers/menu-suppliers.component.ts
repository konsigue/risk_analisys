import { Component, OnInit } from '@angular/core';
import { Item } from './menu-item'
import {
  trigger,
  transition,
  animate,
  style,
  state
} from '@angular/animations';

@Component({
  selector: 'menu-suppliers',
  templateUrl: './menu-suppliers.component.html',
  styleUrls: ['./menu-suppliers.component.css'],
  animations: [
    trigger('clicked', [
      state('inactive', style({
        backgroundColor: '#fff',
        color: '#000000',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#006ADE',
        color: '#fff',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ]),
  ],
})
export class MenuSuppliersComponent implements OnInit {

  constructor() { 
    this.states[0]= new Item('active', true);
    //console.log(this.states[0]);
    for(let i = 1;i<7;i++) { 
      //console.log(i);
      this.states[i]= new Item('inactive', false);
      //console.log(this.states[i]);
   }
  }

  public states = new Array(7);

  mostrar= false

  toggleState(n:number) {
    //console.log(n);
    this.states[n].state='active';
    this.states[n].mostrar=true;
    //console.log(this.states[n]);
    for(let i = 0;i<7;i++) {
      if(i!=n){
        this.states[i].state = 'inactive';
        this.states[i].mostrar=false;
      }
      //console.log(this.states[i]);
   }
  }

  ngOnInit() {
  }

}
