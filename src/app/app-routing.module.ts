import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './modules/home/pages/supplier/contact/contact.component';
import { CreateSupplierComponent } from './modules/home/pages/supplier/create-supplier/create-supplier.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { CreateContactComponent } from './modules/home/pages/supplier/contact/create-contact/create-contact.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { AdminGuard } from './modules/auth/guards/admin.guard';



const routes: Routes = [
{
  path: '',
  loadChildren:()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)
},
{
  path: 'home',
  loadChildren:()=> import('./modules/home/home.module').then(m=>m.HomeModule),
  canActivate:[AuthGuard]/*,
  canMatch: [AuthGuard]*/
},
{
  path: 'admin',
  loadChildren:()=> import('./modules/admin/admin.module').then(m=>m.AdminModule),
  canActivate:[AuthGuard, AdminGuard],
},
{
  path: 'home/supplier/contact', component: ContactComponent, canActivate:[AuthGuard]
},
{
  path: 'home/supplier/create-supplier', component: CreateSupplierComponent, canActivate:[AuthGuard]
},
{
  path: 'home/supplier/contact/create-contact', component: CreateContactComponent, canActivate:[AuthGuard]
},
{
  path: '**',
  component: PageNotFoundComponent
}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
