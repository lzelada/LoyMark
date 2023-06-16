import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroment';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url: string = enviroment.endpoint;
  apiUrl: string = 'api/Usuario/';

  constructor(
    private http: HttpClient
  ){}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.url}${this.apiUrl}`);
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}${this.apiUrl}${id}`);
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.url}${this.apiUrl}`, usuario);
  }

  updateUsuario(id: number, usuario: Usuario): Observable<void> {
    return this.http.put<void>(`${this.url}${this.apiUrl}${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${this.apiUrl}${id}`);
  }
}
