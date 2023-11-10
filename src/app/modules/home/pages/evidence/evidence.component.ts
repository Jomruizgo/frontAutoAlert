import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evidence',
  templateUrl: './evidence.component.html',
  styleUrls: ['./evidence.component.css'],
})
export class EvidenceComponent {
  constructor(private router: Router) {}

  redirectToCreateEvidence() {
    this.router.navigate(['/home/create-evidence']);
  }

  redirectToDetailEvidence() {
    this.router.navigate(['/home/detail-evidence']);
  }
}
