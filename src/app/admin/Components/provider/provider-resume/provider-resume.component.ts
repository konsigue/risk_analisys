import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-resume',
  templateUrl: './provider-resume.component.html',
  styleUrls: ['./provider-resume.component.css']
})
export class ProviderResumeComponent implements OnInit {

  provider_name = 'Soluciones Digitales Rubio Haro y asociados.';
  provider_description = 'Empresa dedicada a la consultoria sobre informatica, redes, software y tecnologia en general para empresas y entornos empresariales.';

  constructor() { }

  ngOnInit() {
  }

}
