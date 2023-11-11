import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup = new FormGroup({});
  isAuthenticated: boolean = false;
  authenticatedUser: any;
  errorSesion: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit():void{
    this.formLogin = new FormGroup(
      {
        userForm: new FormControl('',[
          Validators.required
        ]),
        passwordForm: new FormControl('',[
          Validators.required
        ])
      }
    );

    // Suscribirse a los cambios en el formulario
    this.formLogin.valueChanges.subscribe(() => {
      this.errorSesion = false; // Ocultar el mensaje de error
    });
  }

  onLogin() {
    let body = this.formLogin.value;
    this.authService.login(body.userForm, body.passwordForm).subscribe(
      (user) => {
        if (user) {
          this.isAuthenticated = true;
          this.authenticatedUser = user;

          // Almacena el token en localStorage para sesiones futuras
          localStorage.setItem('token', user.token);
          // Redirige a la página de inicio después del inicio de sesión exitoso
          this.router.navigate(['/home']);
        } else {
          this.formLogin.reset();
          this.errorSesion=true;
          console.error('Inicio de sesión fallido');
        }
      }/*,
      (error) => console.error(error)*/
    );
  }


}
