import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-show-all-rooms-for-one-category',
  standalone: false,
  templateUrl: './show-all-rooms-for-one-category.component.html',
  styleUrl: './show-all-rooms-for-one-category.component.css'
})
export class ShowAllRoomsForOneCategoryComponent {

  categories: any[] = [];
  selectedCategoryId: number = 0;
  selectedSortOption: string = '';
  searchText: string = '';
originalRooms: any[] = [];
  constructor(private route: ActivatedRoute, private serv: ServiceService) { }
  ngOnInit() {

    this.showAllRooms();
    this.getAllCategories();

    const categoryId = Number(this.route.snapshot.paramMap.get('id'));
    if (categoryId) {
      this.getRoomsByCategory(categoryId);
    }
  }
  rooms: any = [];
  showAllRooms() {
    this.serv.getAllRooms().subscribe((data: any) => {
      console.log('room category data:', data);
      this.rooms = data;
    });
  }
  getAllRooms() {
    this.serv.getAllRooms().subscribe((data: any) => {
      this.rooms = data;
      this.noRooms = data.length === 0;
      this.sortRoomsByPrice();
    });
  }
  getAllCategories() {
    this.serv.getAllRoomCategory().subscribe((data: any) => {
      this.categories = data;
    });
  }
  noRooms: boolean = false;
 
  onCategoryChange() {
    this.rooms = []; // ⭐ تفريغ الغرف مباشرة بعد الاختيار
    this.noRooms = false;

    if (this.selectedCategoryId == 0) {
      this.getAllRooms();
    } else {
      this.serv.getRoomsByCategory(this.selectedCategoryId).subscribe((data: any) => {
        this.rooms = data || []; // تأكد إنها دايمًا array
        this.noRooms = this.rooms.length === 0;
        this.sortRoomsByPrice();
      });
    }
  }
  
  getRoomsByCategory(categoryId: number) {
    this.rooms = [];
    this.noRooms = false;

    this.serv.getRoomsByCategoryId(categoryId).subscribe((data: any) => {
      this.rooms = data || [];
      this.noRooms = this.rooms.length === 0;
    });
  }

  sortRoomsByPrice() {
    if (this.selectedSortOption === 'lowToHigh') {
      this.rooms.sort((a: any, b: any) => a.price - b.price);
    } else if (this.selectedSortOption === 'highToLow') {
      this.rooms.sort((a: any, b: any) => b.price - a.price);
    }
  }
}

