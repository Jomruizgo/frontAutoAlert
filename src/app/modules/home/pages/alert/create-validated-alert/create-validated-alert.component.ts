import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-validated-alert',
  templateUrl: './create-validated-alert.component.html',
  styleUrls: ['./create-validated-alert.component.css']
})
export class CreateValidatedAlertComponent {

  constructor(private router: Router) { }

  redirectToAlert() {
    this.router.navigate(['/home/create-alert']);
  }
}
