import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style
} from '@angular/animations';

@Component({
  selector: 'app-registro-f',
  templateUrl: './registro-f.component.html',
  styleUrls: ['./registro-f.component.css'],
  animations: [
    trigger('animationSwitch', [
      transition('void=>*', [
        style({opacity:0,transform: 'translateY(-5%)'}),
        animate(2000),
      ])
    ])
  ]
})
export class RegistroFComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
