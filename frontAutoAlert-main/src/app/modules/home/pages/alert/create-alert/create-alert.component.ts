import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-alert',
  templateUrl: './create-alert.component.html',
  styleUrls: ['./create-alert.component.css']
})
export class CreateAlertComponent {

  constructor(private router: Router) { }

  redirectToAlert() {
    this.router.navigate(['/home/alert']);
  }

  redirectToValidatedAlert() {
    this.router.navigate(['/home/create-validated-alert']);
  }


}
