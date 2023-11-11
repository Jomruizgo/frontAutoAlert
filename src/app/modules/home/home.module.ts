import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { CreateSupplierComponent } from './pages/supplier/create-supplier/create-supplier.component';

import { AlertComponent } from './pages/alert/alert.component';
import { SharedModule } from "../../shared/shared.module";
import { CreateAlertComponent } from './pages/alert/create-alert/create-alert.component';
// <<<<<<< HEAD
import { ContactComponent } from './pages/supplier/contact/contact.component';
import { CreateContactComponent } from './pages/supplier/contact/create-contact/create-contact.component';
// =======
import { RegisterPartComponent } from './pages/parts/register-associated-part/register-part.component';
import { EvidenceComponent } from './pages/evidence/evidence.component';
import { CreateEvidenceComponent } from './pages/evidence/create-evidence/create-evidence.component';
import { DetailEvidenceComponent } from './pages/evidence/detail-evidence/detail-evidence.component';
import { PartsComponent } from './pages/parts/parts.component';
import { RegisterNewPartComponent } from './pages/parts/register-new-part/register-new-part.component';
import { AlertOverviewComponent } from './pages/alert/alert-overview/alert-overview.component';
import { CreateValidatedAlertComponent } from './pages/alert/create-validated-alert/create-validated-alert.component';
import { AlertTrackingComponent } from './pages/alert/alert-tracking/alert-tracking.component';
// >>>>>>> 2cdcf33c27c6a9d645a0a4ccec973437f086e8f2


@NgModule({
    declarations: [
        HomeComponent,
        SupplierComponent,
        CreateSupplierComponent,
        AlertComponent,
        EvidenceComponent,
        CreateAlertComponent,
        ContactComponent,
        CreateContactComponent,
        RegisterPartComponent,
        CreateEvidenceComponent,
        DetailEvidenceComponent,
        PartsComponent,
        RegisterNewPartComponent,
        AlertOverviewComponent,
        CreateValidatedAlertComponent,
        AlertTrackingComponent

    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule { }
