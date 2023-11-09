import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  constructor(private router: Router) { }

  redirectToCreateAlert() {
    this.router.navigate(['/home/create-alert']);
  }

  redirectToRegisterPart() {
    this.router.navigate(['/home/register-part'])
  }
}
