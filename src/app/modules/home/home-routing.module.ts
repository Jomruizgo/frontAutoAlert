import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { AlertComponent } from './pages/alert/alert.component';
import { EvidenceComponent } from './pages/evidence/evidence.component';
import { ReferenceComponent } from './pages/reference/reference.component';
import { CreateAlertComponent } from './pages/alert/create-alert/create-alert.component';
import { CreateEvidenceComponent } from './pages/evidence/create-evidence/create-evidence.component';
import { ListEvidenceComponent } from './pages/evidence/list-evidence/list-evidence.component';



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
    path: 'evidence',
    component: EvidenceComponent
  },
  {
    path: 'create-alert',
    component: CreateAlertComponent
  },
  {
    path: 'create-evidence',
    component: CreateEvidenceComponent
  },
  {
    path: 'list-evidence',
    component: ListEvidenceComponent
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
