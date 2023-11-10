import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-tracking',
  templateUrl: './alert-tracking.component.html',
  styleUrls: ['./alert-tracking.component.css']
})
export class AlertTrackingComponent {

  constructor(private router: Router) { }

  redirectToAlert() {
    this.router.navigate(['/home/alert-overview']);
  }
  
}
