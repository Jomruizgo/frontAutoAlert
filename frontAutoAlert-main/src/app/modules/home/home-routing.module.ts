import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { AlertComponent } from './pages/alert/alert.component';
import { EvidenceComponent } from './pages/evidence/evidence.component';
import { CreateAlertComponent } from './pages/alert/create-alert/create-alert.component';
import { CreateEvidenceComponent } from './pages/evidence/create-evidence/create-evidence.component';
import { DetailEvidenceComponent } from './pages/evidence/detail-evidence/detail-evidence.component';
import { AlertOverviewComponent } from './pages/alert/alert-overview/alert-overview.component';
import { CreateValidatedAlertComponent } from './pages/alert/create-validated-alert/create-validated-alert.component';
import { AlertTrackingComponent } from './pages/alert/alert-tracking/alert-tracking.component';
import { PartsComponent } from './pages/parts/parts.component';


import { RegisterPartComponent } from './pages/parts/register-associated-part/register-part.component';
import { RegisterNewPartComponent } from './pages/parts/register-new-part/register-new-part.component';


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
    path: 'create-validated-alert',
    component: CreateValidatedAlertComponent
  },
  {
    path: 'alert-overview',
    component: AlertOverviewComponent
  },
  {
    path: 'alert-tracking',
    component: AlertTrackingComponent
  },
  {
    path: 'create-evidence',
    component: CreateEvidenceComponent
  },
  {
    path: 'detail-evidence',
    component: DetailEvidenceComponent
  },
  {
    path: 'register-part',
    component: RegisterPartComponent
  },
  {
    path: 'parts',
    component: PartsComponent
  },
  {
    path: 'register-new-part',
    component: RegisterNewPartComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
