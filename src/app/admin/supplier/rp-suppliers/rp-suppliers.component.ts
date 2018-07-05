import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rp-suppliers',
  templateUrl: './rp-suppliers.component.html',
  styleUrls: ['./rp-suppliers.component.css']
})
export class RpSuppliersComponent implements OnInit {

  pregunta1 = false;
  pregunta2 = false;
  pregunta3 = false;

  constructor() { }

  toggleShow(mostrar: boolean, n:number) {
    if(n==1){
      this.pregunta1 = mostrar;
    }else if(n==2){
      this.pregunta2 = mostrar;
    }else if(n==3){
      this.pregunta3 = mostrar;
    }
  }
  

  ngOnInit() {
  }

}
