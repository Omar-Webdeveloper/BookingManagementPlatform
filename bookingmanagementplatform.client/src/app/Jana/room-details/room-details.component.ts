import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-room-details',
  standalone: false,
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css'
})
export class RoomDetailsComponent {
  room: any;

  constructor(private route: ActivatedRoute, private serv: ServiceService) { }

  ngOnInit() {
    const roomId = Number(this.route.snapshot.paramMap.get('id'));
    if (roomId) {
      this.serv.getRoomDetails(roomId).subscribe(data => {
        this.room = data;
      });
    }
  }
}
