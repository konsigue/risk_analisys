import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  state
} from '@angular/animations';

@Component({
  selector: 'app-targeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
  animations: [
    trigger('clicked', [
      state('inactive', style({
        backgroundColor: '#495057',
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
})
export class TarjetaComponent implements OnInit {



  constructor() { }

  state='inactive';
  mostrar= false

  toggleState(n:number) {
    //console.log(this.state)
    if(n==1){
      this.state = 'active';
      this.mostrar=true;
    }
    if(n==0){
      this.state = 'inactive';
      this.mostrar=false;
    }

  }

  ngOnInit() {
  }

}
