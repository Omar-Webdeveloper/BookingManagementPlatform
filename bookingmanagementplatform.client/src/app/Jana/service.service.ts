import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  getAllRoomCategory() {
    return this._http.get("https://localhost:7297/api/Category/GetAllRoomsCategory");
  }
 
  getRoomsByCategory(id: number) {
    return this._http.get<any>(`https://localhost:7297/api/StudyRooms/GetRoomsByCategory/${id}`);
  }

  getAllRooms() {
    return this._http.get("https://localhost:7297/api/StudyRooms/GetAllStudyRooms");
  }
  getRoomDetails(id: number) {
    return this._http.get<any>(`https://localhost:7297/api/StudyRooms/GetRoomDetails/${id}`);
  }
  getRoomsByCategoryId(categoryId: number) {
    return this._http.get(`https://localhost:7297/api/StudyRooms/GetRoomsByCategory/${categoryId}`);
  }


}
