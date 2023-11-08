import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './modules/auth/pages/pages.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';


const routes: Routes = [
{
  path: '',
  loadChildren:()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)
},
{
  path: 'admin',
  loadChildren:()=> import('./modules/admin/admin.module').then(m=>m.AdminModule)
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
