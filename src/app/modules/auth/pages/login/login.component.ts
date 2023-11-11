import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  isAuthenticated: boolean = false;
  authenticatedUser: any;

  constructor(private authService: AuthService, private router: Router) {}

  /*ngOnInit() {
    const token = localStorage.getItem('token');

    if (token) {
      this.authService.getUserInfo(token).subscribe(
        (user) => {
          if (user) {
            this.isAuthenticated = true;
            this.authenticatedUser = user;
          }
        }/*,
        (error) => console.error(error)
      );
    }
  }
*/
  onLogin(username: string,password: string) {
    this.authService.login(username, password).subscribe(
      (user) => {
        if (user) {
          this.isAuthenticated = true;
          this.authenticatedUser = user;

          // Almacena el token en localStorage para sesiones futuras
          localStorage.setItem('token', user.token);
          // Redirige a la página de inicio después del inicio de sesión exitoso
          this.router.navigate(['/home']);
        } else {
          console.error('Inicio de sesión fallido');
        }
      }/*,
      (error) => console.error(error)*/
    );
  }


}
