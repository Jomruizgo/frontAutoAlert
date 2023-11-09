import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.css']
})
export class EvidenceComponent {

  constructor(private router: Router) { }

  redirectToCreateAlert() {
    this.router.navigate(['/home/create-evidence']);
  }

}