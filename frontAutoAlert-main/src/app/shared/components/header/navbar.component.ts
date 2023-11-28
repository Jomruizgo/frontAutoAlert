import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mainMenu: Array<any> =[];
  private defaultOptions: Array<any>=[];
  private adminOptions:Array<any> =[];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.defaultOptions=[
      {
        name:'Inicio',
        router:['/home']
      },
      {
        name:'Alertas',
        router:['/home','alert']
      },
      {
        name:'Registro de piezas',
        router:['/home','parts']
      },
      {
        name:'Evidencias',
        router:['/home','evidence']
      },
      {
        name:'Proveedores',
        router:['/home','supplier']
      }
    ]

    this.adminOptions=[
      {
        name: 'Administración',
        router:['/admin']
      }
    ]

      if(this.authService.getLogedUser().role == 'admin'){
        this.mainMenu= [ ...this.defaultOptions, ...this.adminOptions];
      }else{
        this.mainMenu= this.defaultOptions;
      }


  }

  onLogout(): void {
    // Llama al método logout del servicio AuthService
    this.authService.logout();
    // Se redirige a la página de inicio de sesión o y se pueden realizar otras acciones después de cerrar sesión
    this.router.navigate(['']);
  }
}
