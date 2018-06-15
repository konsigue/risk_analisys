import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style
} from '@angular/animations';

@Component({
  selector: 'app-registro-fisico',
  templateUrl: './registro-fisico.component.html',
  styleUrls: ['./registro-fisico.component.css'],
  animations: [
    trigger('animationSwitch', [
      transition('void=>*', [
        style({opacity:0}),
        animate(2000),
      ])
    ])
  ]
})

export class RegistroFisicoComponent implements OnInit {

  constructor() { }

  state='inactive';

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  ngOnInit() {
  }

}
