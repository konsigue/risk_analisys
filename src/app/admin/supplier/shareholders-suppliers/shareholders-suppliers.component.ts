import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shareholders-suppliers',
  templateUrl: './shareholders-suppliers.component.html',
  styleUrls: ['./shareholders-suppliers.component.css']
})
export class ShareholdersSuppliersComponent implements OnInit {

  constructor() { }

  mostrar=false;

  toggleShow(mostrar: boolean) {
    this.mostrar=mostrar;
  }

  adjustPercentage(){
    let percentage = (<HTMLInputElement>document.getElementById("porcentaje"));
    if(percentage.valueAsNumber>=100){
      percentage.valueAsNumber=100;
    }else if(percentage.valueAsNumber<=0){
      percentage.valueAsNumber=0;
    }
  }

  ngOnInit() {
  }

}
