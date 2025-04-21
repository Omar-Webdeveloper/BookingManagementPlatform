import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-show-all-rooms-categories',
  standalone: false,
  templateUrl: './show-all-rooms-categories.component.html',
  styleUrl: './show-all-rooms-categories.component.css'
})
export class ShowAllRoomsCategoriesComponent {
  constructor(private serv: ServiceService) { }
  ngOnInit() {

    this.getAllRoomCategory();
  }
  roomCategory: any = [];
  getAllRoomCategory() {
    this.serv.getAllRoomCategory().subscribe((data: any) => {
      console.log('room category data:', data);
      this.roomCategory = data;
    });
  }
}
