import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { PermissionsComponent } from './pages/permissions/permissions.component';
import { RolesComponent } from './pages/roles/roles.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'user', component: UserComponent},
  {path: 'permissions', component: PermissionsComponent},
  {path: 'roles', component: RolesComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
