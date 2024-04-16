import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'http://localhost:8080/profile';

  constructor(private http: HttpClient) { }

  getPerfis(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.apiUrl);
  }

  criarPerfil(perfil: Profile): Observable<Profile> {
    return this.http.post<Profile>(this.apiUrl, perfil);
  }

  atualizarPerfil(perfil: Profile): Observable<Profile> {
    const url = `${this.apiUrl}/${perfil.id}`;
    return this.http.put<Profile>(url, perfil);
  }

  deletarPerfil(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  // Adicionando método de fábrica para criar instâncias do serviço
  static create(httpClient: HttpClient): ProfileService {
    return new ProfileService(httpClient);
  }
}
