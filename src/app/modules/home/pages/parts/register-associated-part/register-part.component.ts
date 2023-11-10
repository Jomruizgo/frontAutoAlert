import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-part',
  templateUrl: './register-part.component.html',
  styleUrls: ['./register-part.component.css']
})
export class RegisterPartComponent {

  constructor(private router: Router) {

  }

  backToMainPage() {
    this.router.navigate(['/home/parts'])
  }
}
