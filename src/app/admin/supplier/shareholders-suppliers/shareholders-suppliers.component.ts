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
    let percentage = document.getElementById("porcentaje");
    if(percentage.value>=100){
      percentage.value=100;
    }else if(percentage.value<=0){
      percentage.value=0;
    }
  }

  ngOnInit() {
  }

}
