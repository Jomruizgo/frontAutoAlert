import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { AlertComponent } from './pages/alert/alert.component';
import { ReferenceComponent } from './pages/reference/reference.component';
import { SharedModule } from "../../shared/shared.module";
import { CreateAlertComponent } from './pages/alert/create-alert/create-alert.component';
import { EvidenceComponent } from './pages/evidence/evidence.component';
import { CreateEvidenceComponent } from './pages/evidence/create-evidence/create-evidence.component';
import { DetailEvidenceComponent } from './pages/evidence/detail-evidence/detail-evidence.component';


@NgModule({
    declarations: [
        HomeComponent,
        SupplierComponent,
        AlertComponent,
        EvidenceComponent,
        ReferenceComponent,
        CreateAlertComponent,
        CreateEvidenceComponent,
        DetailEvidenceComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule { }
