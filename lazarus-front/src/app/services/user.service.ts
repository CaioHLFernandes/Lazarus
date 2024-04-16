import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  criarUsuario(usuario: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, usuario);
  }

  atualizarUsuario(usuario: User): Observable<User> {
    const url = `${this.apiUrl}/${usuario.id}`;
    return this.http.put<User>(url, usuario);
  }

  deletarUsuario(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
