import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alert-overview',
  templateUrl: './alert-overview.component.html',
  styleUrls: ['./alert-overview.component.css']
})
export class AlertOverviewComponent {

  constructor(private router: Router) { }

  redirectToAlert() {
    this.router.navigate(['/home/alert']);
  }

}
