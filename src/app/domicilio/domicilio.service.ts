import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Domicilio } from './domicilio';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
};

@Injectable()
export class DomicilioService {
    zipCodeUrl = "https://api-codigos-postales.herokuapp.com/v2/codigo_postal/"
    
    constructor(private http: HttpClient) {

    }

    /**
     * GET Address associated with the zip code and a list of districts from that zip code
     * @param zipCode number of the user given zipCode
     */
    getAddress(zipCode: number): Observable<Domicilio> {
        return this.http.get<Domicilio>(this.zipCodeUrl + zipCode, httpOptions);
    }
}