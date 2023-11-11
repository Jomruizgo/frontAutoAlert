import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userDataUrl = 'assets/data/user.json';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Aquí podrías realizar la autenticación real, pero en este caso simplemente
    // comprobaremos si el usuario existe en la "base de datos" simulada
    return this.http.get(this.userDataUrl).pipe(
      map((data: any) => {
        const authenticatedUser = data.users.find(
          (user: any) => user.user === username
        );

        if (authenticatedUser) {
          // Simular respuesta exitosa con información del usuario
          return authenticatedUser;
        } else {
          // Simular respuesta fallida
          return null;
        }
      })
    );
  }

  getUserInfo(token: string): Observable<any> {
    // Simular la obtención de información del usuario autenticado
    return this.http.get(this.userDataUrl).pipe(
      map((data: any) => {
        const authenticatedUser = data.users.find(
          (user: any) => user.token === token
        );

        if (authenticatedUser) {
          return authenticatedUser;
        } else {
          return null;
        }
      })
    );
  }

  logout() {
    // Elimina el token almacenado al cerrar sesión
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    // Verifica si el usuario está autenticado
    const token = localStorage.getItem('token');
    return !!token; // Devuelve true si hay un token, false si no lo hay
  }
}
