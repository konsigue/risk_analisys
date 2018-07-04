import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operativeness',
  templateUrl: './operativeness.component.html',
  styleUrls: ['./operativeness.component.css']
})
export class OperativenessComponent implements OnInit {

  public year1 = 2017;
  public year2 = 2018;
  public Riesgos = {
    'riesgo_1': 47.48,
    'riesgo_2': 26.4,
  };
  constructor() { }

  table_data_incomes = [
    {
      'fiel_name': 'Efectivo',
      'year1': 0,
      'year2': 0,
    }, {
      'fiel_name': 'Cheque',
      'year1': 1.81,
      'year2': 0.91,
    }, {
      'fiel_name': 'Transferencia',
      'year1': 50.71,
      'year2': 72.69,
    }, {
      'fiel_name': 'Tarjeta de crédito',
      'year1': 0,
      'year2': 0,
    }, {
      'fiel_name': 'Tarjeta de débito',
      'year1': 0,
      'year2': 0,
    }, {
      'fiel_name': 'Tarjeta digital',
      'year1': 0,
      'year2': 0,
    }, {
      'fiel_name': 'Monedero',
      'year1': 0,
      'year2': 0,
    }, {
      'fiel_name': 'Vales',
      'year1': 0,
      'year2': 0,
    }, {
      'fiel_name': 'Otro',
      'year1': 0,
      'year2': 0,
    }
  ];

  table_data_outcomes = [
    {
      'fiel_name': 'Viajes',
      'year1': 2.99,
      'year2': 1.76,
    }, {
      'fiel_name': 'Internet & Telefonía',
      'year1': 19.72,
      'year2': 36.07,
    }, {
      'fiel_name': 'Restaurants',
      'year1': 0.77,
      'year2': 0.68,
    }, {
      'fiel_name': 'Gasolina',
      'year1': 16.17,
      'year2': 11.26,
    }, {
      'fiel_name': 'Tiendas',
      'year1': 18.68,
      'year2': 16.66,
    }, {
      'fiel_name': 'Seguros',
      'year1': 11.72,
      'year2': 19.46,
    }, {
      'fiel_name': 'Fletes',
      'year1': 2.40,
      'year2': 2.61,
    }, {
      'fiel_name': 'Automóviles & Autopartes',
      'year1': 20.08,
      'year2': 4.49,
    }, {
      'fiel_name': 'Electrónicos & Software',
      'year1': 6.33,
      'year2': 4.29,
    }, {
      'fiel_name': 'Otros',
      'year1': 1.14,
      'year2': 2.72,
    }
  ];

  ngOnInit() {
  }

}
