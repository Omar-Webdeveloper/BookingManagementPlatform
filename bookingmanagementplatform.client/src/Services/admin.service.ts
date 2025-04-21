import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) { }


  private AllRoomsAPI = 'https://localhost:7297/api/Services/GetAllRooms';

  private RoomByIDAPI = 'https://localhost:7297/api/Services/GetRoomById'; //        /{id}

  private AddRoomAPI = 'https://localhost:7297/api/Services/AddRoom';

  private UpdateRoomAPI = 'https://localhost:7297/api/Services/UpdateRoom'; //     /{id}

  private DeleteRoomAPI = 'https://localhost:7297/api/Services/DeleteRoom'; //     /{id}

  //...............................................................................................

  private AllRoomsCategoriesAPI = 'https://localhost:7297/api/Services/GetAllRoomsCategories';

  private AddRoomCategoryAPI = 'https://localhost:7297/api/Services/AddRoomCategory';

  private UpdateRoomCategoryAPI = 'https://localhost:7297/api/Services/UpdateRoomCategory'; //      /{id}

  private DeleteRoomCategoryAPI = 'https://localhost:7297/api/Services/DeleteRoomCategory'; //       /{id}

  private RoomCategoryByIDAPI = 'https://localhost:7297/api/Services/GetRoomCategoryById'; //         /{id}

  //................................................................................................

  private AllUsersAPI = 'https://localhost:7297/api/Services/GetAllUsers';


   GetAllRooms() {
    return this._http.get(this.AllRoomsAPI);
  }


  GetRoomByID(id: any) {

    return this._http.get(`${this.RoomByIDAPI}/${id}`);
  }
  


  AddRoom(formData: any) {
    return this._http.post(this.AddRoomAPI, formData);
  }





  editRoom(id: any, EditedRoom: any) {
    return this._http.put(`${this.UpdateRoomAPI}/${id}`, EditedRoom);
  }


  DeleteRoom(id: any) {
    return this._http.delete(`${this.DeleteRoomAPI}/${id}`)
}



//.......................................................

  GetAllRoomsCategories() {
    return this._http.get(this.AllRoomsCategoriesAPI);
  }


  GetRoomCategoryByID(id: any) {

    return this._http.get(`${this.RoomCategoryByIDAPI}/${id}`);
  }


  AddRoomCategory(RoomCategory: any) {
    return this._http.post(this.AddRoomCategoryAPI, RoomCategory);
  }


  editRoomCategory(id: any, EditedRoomCategory: any) {
    return this._http.put(`${this.UpdateRoomCategoryAPI}/${id}`, EditedRoomCategory);
  }


  DeleteRoomCategory(id: any) {
    return this._http.delete(`${this.DeleteRoomCategoryAPI}/${id}`)
  }

  //.......................................................

  GetAllUsers() {
    return this._http.get(this.AllUsersAPI);
  }

}
