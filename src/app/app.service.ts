import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";

import { Client } from './models/Client';
import { environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<Client[]> {
    const url = `${environment.baseURL}/client`;
    console.log(url)
    return this.http.get<Client[]>(url);
  }
}
