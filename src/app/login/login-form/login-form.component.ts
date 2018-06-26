import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style
} from '@angular/animations';



@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  animations: [
    trigger('fadeIn', [
      transition('void=>*', [
        style({opacity:0}),
        animate(2000),
      ])
    ])
  ]
})


export class LoginFormComponent implements OnInit {

  constructor() { }

  mostrar= false;

  ngOnInit() {
  }

}
