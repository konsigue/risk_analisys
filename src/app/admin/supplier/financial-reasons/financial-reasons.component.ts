import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-reasons',
  templateUrl: './financial-reasons.component.html',
  styleUrls: ['./financial-reasons.component.css']
})
export class FinancialReasonsComponent implements OnInit {

  constructor() { }

    razonesFinancieras = [

    { 'Menu': 'Parcial hasta', 'Anio': '2009', 'CrecimientoNominal': '8',
      'MargenOperativo': '6', 'Productividad': '2', 'MargenNeto': '5', 'RazonCirculante': '4',
      'PruebaDelAcido': '2', 'PasivoTotal': '3', 'ActivoTotal': '6', 'DiasProveedores': '3',
      'DiasInventarios': '7', 'CicloFinanciero': '9', 'CapitalDeTrabajo': '9', 'RazonCapTrab': '3'},

     {'Menu': 'Ejercicio 2010', 'Anio': '2010', 'CrecimientoNominal': '7',
      'MargenOperativo': '6', 'Productividad': '2', 'MargenNeto': '5',
    'RazonCirculante': '4', 'PruebaDelAcido': '2', 'PasivoTotal': '3', 'ActivoTotal': '6', 
    'DiasProveedores': '3', 'DiasInventarios': '7', 'CicloFinanciero': '9', 'CapitalDeTrabajo': '9',
      'RazonCapTrab': '3'},

    {'Menu': 'Ejercicio 2011', 'Anio': '2011', 'CrecimientoNominal': '6',
     'MargenOperativo': '6', 'Productividad': '2', 'MargenNeto': '5', 
    'RazonCirculante': '4', 'PruebaDelAcido': '2', 'PasivoTotal': '3', 'ActivoTotal': '6', 
    'DiasProveedores': '3', 'DiasInventarios': '7', 'CicloFinanciero': '9', 'CapitalDeTrabajo': '9',
    'RazonCapTrab': '3'},

    {'Menu': 'Ejercicio 2012', 'Anio': '2012', 'CrecimientoNominal': '5', 
    'MargenOperativo': '2', 'Productividad': '3', 'MargenNeto': '4', 
    'RazonCirculante': '5', 'PruebaDelAcido': '5', 'PasivoTotal': '4', 'ActivoTotal': '8', 
    'DiasProveedores': '6', 'DiasInventarios': '7', 'CicloFinanciero': '9', 'CapitalDeTrabajo': '9',
    'RazonCapTrab': '3'},

    {'Menu': 'Ejercicio 2013', 'Anio': '2013', 'CrecimientoNominal': '4', 
    'MargenOperativo': '6', 'Productividad': '2016', 'MargenNeto': '5', 
    'RazonCirculante': '4', 'PruebaDelAcido': '2', 'PasivoTotal': '3', 'ActivoTotal': '6', 
    'DiasProveedores': '3', 'DiasInventarios': '7', 'CicloFinanciero': '9', 'CapitalDeTrabajo': '9',
    'RazonCapTrab': '3'},
  
    {'Menu': 'Ejercicio 2014', 'Anio': '2014', 'CrecimientoNominal': '3',
     'MargenOperativo': '6', 'Productividad': '2016', 'MargenNeto': '5', 
    'RazonCirculante': '4', 'PruebaDelAcido': '2', 'PasivoTotal': '3', 'ActivoTotal': '6', 
    'DiasProveedores': '3', 'DiasInventarios': '7', 'CicloFinanciero': '9', 'CapitalDeTrabajo': '9',
    'RazonCapTrab': '3'},
  
    {'Menu': 'Ejercicio 2015', 'Anio': '2015', 'CrecimientoNominal': '2',
     'MargenOperativo': '6', 'Productividad': '2016', 'MargenNeto': '5', 
    'RazonCirculante': '4', 'PruebaDelAcido': '2', 'PasivoTotal': '3', 'ActivoTotal': '6', 
    'DiasProveedores': '3', 'DiasInventarios': '7', 'CicloFinanciero': '9', 'CapitalDeTrabajo': '9',
    'RazonCapTrab': '3'},
  
    {'Menu': 'Ejercicio 2016', 'Anio': '2016', 'CrecimientoNominal': '1',
     'MargenOperativo': '6', 'Productividad': '2016', 'MargenNeto': '5', 
    'RazonCirculante': '4', 'PruebaDelAcido': '2', 'PasivoTotal': '3', 'ActivoTotal': '6', 
    'DiasProveedores': '3', 'DiasInventarios': '7', 'CicloFinanciero': '9', 'CapitalDeTrabajo': '9',
    'RazonCapTrab': '3'},
    ];

  
    

  ngOnInit() {
    //  let arreglo = [];
    
    

    // let desde = 2010;
    // let hasta = desde + 6;
    // let v = 2010;
    
    // for (let i = 0; i <= 6; i++) {
    //     arreglo[i] = v++;
    //     console.log(i);
    // }

    // for (let i = 0; i < info.length; i++) {
      
    // }
  


  }

  alerta():void{
  console.log("Hola");
  }
  
  findYear():void{
    let from = document.getElementById("select-from")
  }

}

