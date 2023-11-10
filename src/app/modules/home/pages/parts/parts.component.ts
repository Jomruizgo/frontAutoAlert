import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent {

  constructor(private router: Router) {
  }

  redirectToRegisterPart() {
    this.router.navigate(['/home/register-part'])
  }

  redirectToRegisterNewPart() {
    this.router.navigate(['/home/register-new-part'])
  }

}
