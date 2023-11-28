import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/header/navbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListComponent } from './components/list/list.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    SidebarComponent,
    ListComponent,
    AdminNavbarComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule //para que se pueda navegar entre items del navbar.
  ],
  exports:[
    PageNotFoundComponent,
    NavbarComponent,
    SidebarComponent,
    ListComponent,
    AdminNavbarComponent
  ]
})
export class SharedModule { }
