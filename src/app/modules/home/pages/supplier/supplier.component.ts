import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {

  constructor(private router: Router) { }

  redirectToContact() {
    this.router.navigate(['/home/supplier/contact']);
  }
  redirectToCreateSupplier() {
    this.router.navigate(['/home/supplier/create-supplier']);
  }
}
