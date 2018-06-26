import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style
} from '@angular/animations';
import { DataRegisterService } from '../../data-register.service';

@Component({
  selector: 'app-person-type',
  templateUrl: './person-type.component.html',
  styleUrls: ['./person-type.component.css'],
  animations: [
    trigger('animationSwitch', [
      transition('void=>*', [
        style({opacity: 0, transform: 'translateY(-15%)'}),
        animate(1000),
      ])
    ])
  ]
})

export class PersonTypeComponent implements OnInit {

  constructor(private _dataRegisterService: DataRegisterService) { }

  state = 'inactive';
  n: number;

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  onClick(tipo) {
    //console.log(tipo);
    this._dataRegisterService.saveData(tipo);
  }



  ngOnInit() {
  }

}
