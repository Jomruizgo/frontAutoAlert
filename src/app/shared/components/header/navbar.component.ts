import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mainMenu:{ defaultOptions: Array<any>, adminOptions:Array<any> } ={defaultOptions:[], adminOptions:[]};

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.mainMenu.defaultOptions=[
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
        name:'Referencias',
        router:['/home','reference']
      },
      {
        name:'Proveedores',
        router:['/home','supplier']
      }
    ]

    this.mainMenu.adminOptions=[
      {
        name: 'Administración',
        router:['/admin']
      }
    ]

  }
}
