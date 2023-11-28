import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  menuitems?: any[];
  constructor(private sidebarService:SidebarService, private router: Router){
    this.menuitems = this.sidebarService.menu;
    console.log(this.menuitems)
  }
  ngOnInit(): void {
  }

  // logout(){
  //   this.router.navigateByUrl('');
  // }
}
