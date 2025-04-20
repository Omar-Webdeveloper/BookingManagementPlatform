import { Component } from '@angular/core';
import { AdminService } from '../../../Services/admin.service';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  ngOnInit() {
    this.GetAllUsers();
  }

  constructor(private _admin: AdminService) { }
  UsersContainer: any


  searchText: string = '';



  filteredUsers() {
    return this.UsersContainer.filter((user: any) =>
      user.FullName?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  

}


  GetAllUsers() {
    this._admin.GetAllUsers().subscribe((data: any) => {
      this.UsersContainer = data;
    });
  }
}
