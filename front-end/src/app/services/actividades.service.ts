import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroment';
import { Observable } from 'rxjs';
import { Actividad } from '../models/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  url: string = enviroment.endpoint;
  apiUrl: string = 'api/Actividad/';

  constructor(
    private http: HttpClient
  ){}

  getActividades(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(`${this.url}${this.apiUrl}`);
  }
}
