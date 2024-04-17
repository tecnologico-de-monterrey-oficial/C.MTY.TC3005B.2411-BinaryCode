import { Component } from '@angular/core';
import { navBarData } from './nav-data';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
	isCollapsed = false; 
  
}
