import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/header/navbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
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
  ]
})
export class SharedModule { }
