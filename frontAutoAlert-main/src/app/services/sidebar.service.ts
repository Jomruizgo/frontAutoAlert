import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu : any[] =[{
    titulo : 'Admin',
    icono: 'nav-icon fas fa-tachometer-alt',
    submenu:[
      {titulo: 'Usuarios', url: 'user', icono: 'fa fa-users'},
      {titulo: 'Permisos', url: 'permissions', icono: 'fa-solid fa-shield'},
      {titulo: 'Roles', url: 'roles', icono: 'fa-solid fa-user-secret'},
    ]
  }]
}
