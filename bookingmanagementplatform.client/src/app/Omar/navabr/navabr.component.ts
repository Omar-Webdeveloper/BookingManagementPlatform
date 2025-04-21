import { Component } from '@angular/core';

@Component({
  selector: 'app-navabr',
  standalone: false,
  templateUrl: './navabr.component.html',
  styleUrl: './navabr.component.css'
})
export class NavabrComponent {
  isAdmin: any ;

  ngOnInit(): void {
    sessionStorage.setItem("role","Empty");
    const role = sessionStorage.getItem('role'); // Retrieve role from session storage
    this.isAdmin = role ; // Check if the role is "Admin"
  }

}
