import { Component, OnInit } from '@angular/core';
import { FinanceInstitution } from './institution';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-finance-institutions',
  templateUrl: './finance-institutions.component.html',
  styleUrls: ['./finance-institutions.component.css']
})

export class FinanceInstitutionsComponent implements OnInit {
  private URL = 'http://localhost:3000/finance_institutions_list';
  private URLFinal;
  public img_link;
  public id = 1;
  public InstitutionsList: FinanceInstitution[];


  getFinanceInstitutions(): void {
    this.URLFinal = this.URL;
    this.http.get<FinanceInstitution[]>(this.URLFinal).subscribe(
      data => {
        this.InstitutionsList = data;
      }
    );
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFinanceInstitutions();
  }

}
