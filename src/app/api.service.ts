
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalsModule } from './globals.module';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ApiService {

    private apiUrl = GlobalsModule.webapiUrl + 'api';

    constructor(private httpClient: HttpClient) { }

    getCurrentFxRates() {
        return this.httpClient.get<any[]>(this.apiUrl + '/CurrentFxRates');
    }   
}
