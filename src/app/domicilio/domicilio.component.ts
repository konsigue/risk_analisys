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

  address: Domicilio;

  constructor(private domicilioService: DomicilioService) { }

  ngOnInit() {
  }

}
