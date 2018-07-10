import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-statements',
  templateUrl: './financial-statements.component.html',
  styleUrls: ['./financial-statements.component.css']
})


export class FinancialStatementsComponent implements OnInit {

  constructor() { }

  estadosFinancieros = [

    { 'Menu': 'Parcial hasta', 'VentasNetas': '8',
      'CostoVentas': '6', 'UtilidadVentas': '2', 'GastoAdministracion': '5', 'Depreciacion': '4',
      'UtilidadOperacion': '2', 'GastosFinancieros': '3', 'ProductosFinancieros': '6', 'UtilidadAntesImpuestos': '3',
      'Impuestos': '7'},

     {'Menu': 'Ejercicio 2010', 'Anio': '2010', 'VentasNetas': '7',
      'CostoVentas': '6', 'UtilidadVentas': '2', 'GastoAdministracion': '5',
    'Depreciacion': '4', 'UtilidadOperacion': '2', 'GastosFinancieros': '3', 'ProductosFinancieros': '6',
    'UtilidadAntesImpuestos': '3', 'Impuestos': '7'},

    {'Menu': 'Ejercicio 2011', 'Anio': '2011', 'VentasNetas': '6',
     'CostoVentas': '6', 'UtilidadVentas': '2', 'GastoAdministracion': '5', 
    'Depreciacion': '4', 'UtilidadOperacion': '2', 'GastosFinancieros': '3', 'ProductosFinancieros': '6',
    'UtilidadAntesImpuestos': '3', 'Impuestos': '7'},

    {'Menu': 'Ejercicio 2012', 'Anio': '2012', 'VentasNetas': '5', 
    'CostoVentas': '2', 'UtilidadVentas': '3', 'GastoAdministracion': '4', 
    'Depreciacion': '5', 'UtilidadOperacion': '5', 'GastosFinancieros': '4', 'ProductosFinancieros': '8',
    'UtilidadAntesImpuestos': '6', 'Impuestos': '7'},

    {'Menu': 'Ejercicio 2013', 'Anio': '2013', 'VentasNetas': '4', 
    'CostoVentas': '6', 'UtilidadVentas': '2016', 'GastoAdministracion': '5', 
    'Depreciacion': '4', 'UtilidadOperacion': '2', 'GastosFinancieros': '3', 'ProductosFinancieros': '6',
    'UtilidadAntesImpuestos': '3', 'Impuestos': '7'},
  
    {'Menu': 'Ejercicio 2014', 'Anio': '2014', 'VentasNetas': '3',
     'CostoVentas': '6', 'UtilidadVentas': '2016', 'GastoAdministracion': '5', 
    'Depreciacion': '4', 'UtilidadOperacion': '2', 'GastosFinancieros': '3', 'ProductosFinancieros': '6', 
    'UtilidadAntesImpuestos': '3', 'Impuestos': '7'},
  
    {'Menu': 'Ejercicio 2015', 'Anio': '2015', 'VentasNetas': '2',
     'CostoVentas': '6', 'UtilidadVentas': '2016', 'GastoAdministracion': '5', 
    'Depreciacion': '4', 'UtilidadOperacion': '2', 'GastosFinancieros': '3', 'ProductosFinancieros': '6', 
    'UtilidadAntesImpuestos': '3', 'Impuestos': '7'},
  
    {'Menu': 'Ejercicio 2016', 'Anio': '2016', 'VentasNetas': '1',
     'CostoVentas': '6', 'UtilidadVentas': '2016', 'GastoAdministracion': '5', 
    'Depreciacion': '4', 'UtilidadOperacion': '2', 'GastosFinancieros': '3', 'ProductosFinancieros': '6', 
    'UtilidadAntesImpuestos': '3', 'Impuestos': '7'},
    ];

  

  ngOnInit() {
  }

}

