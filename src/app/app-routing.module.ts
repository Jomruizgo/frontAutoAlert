import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './modules/home/pages/supplier/contact/contact.component';
import { CreateSupplierComponent } from './modules/home/pages/supplier/create-supplier/create-supplier.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { CreateContactComponent } from './modules/home/pages/supplier/contact/create-contact/create-contact.component';



const routes: Routes = [
{
  path: '',
  loadChildren:()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)
},
{
  path: 'home',
  loadChildren:()=> import('./modules/home/home.module').then(m=>m.HomeModule)
},
{
  path: 'admin',
  loadChildren:()=> import('./modules/admin/admin.module').then(m=>m.AdminModule)
},
{
  path: 'home/supplier/contact', component: ContactComponent
},
{
  path: 'home/supplier/create-supplier', component: CreateSupplierComponent
},
{
  path: 'home/supplier/contact/create-contact', component: CreateContactComponent
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
