import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { AlertComponent } from './pages/alert/alert.component';
import { ReferenceComponent } from './pages/reference/reference.component';
import { CreateAlertComponent } from './pages/alert/create-alert/create-alert.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'supplier',
    component: SupplierComponent
  },
  {
    path: 'alert',
    component: AlertComponent
  },
  {
    path: 'create-alert',
    component: CreateAlertComponent
  },
  {
    path: 'reference',
    component: ReferenceComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
