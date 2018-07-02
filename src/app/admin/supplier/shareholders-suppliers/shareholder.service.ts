import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shareholder } from './shareholderModel';


@Injectable()
export class ShareholderService {
    shareholderUrl = "http://localhost:3000/shareholders";

    constructor(private http: HttpClient) {

    }

    getShareholder(): Observable<Shareholder> {
        return this.http.get<Shareholder>(this.shareholderUrl);
    }
}