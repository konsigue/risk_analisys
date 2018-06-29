import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'supplier-general-info',
  templateUrl: './supplier-general-info.component.html',
  styleUrls: ['./supplier-general-info.component.css']
})
export class SupplierGeneralInfoComponent implements OnInit {
  public toggle: boolean
  public arrow: string

  constructor() { 
    this.toggle = true
  }

  ngOnInit() {
    this.arrow = "fa-chevron-down"
  }

  toggleArrow() {
    this.toggle = !this.toggle
    this.arrow = this.getArrowClass()
  }

  getArrowClass() {
    console.log(this.toggle)
    if (this.toggle) {
      return "fa-chevron-down"
    }
    else {
      return "fa-chevron-right"
    }
  }
}
