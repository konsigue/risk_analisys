import { Component, OnInit } from '@angular/core';
import { DomicilioService } from './domicilio.service';
import { Domicilio } from './domicilio';

@Component({
  selector: 'app-domicilio',
  templateUrl: './domicilio.component.html',
  styleUrls: ['./domicilio.component.css'],
  providers: [DomicilioService]
})
export class DomicilioComponent implements OnInit {
  public zipCode: number;
  public address: Domicilio;

  constructor(private domicilioService: DomicilioService) { }

  ngOnInit() {
  }

  getAddress(): void {
    this.domicilioService.getAddress(this.zipCode).subscribe(a => this.address = a);
  }

  // EVENTS
  onSearchClicked() {
    this.getAddress();
  }
}
