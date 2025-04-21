import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OmarserviceService {

  constructor(private http: HttpClient) { }

  Get_User_INfo(Email: string) {
    return this.http.get(`https://localhost:7297/api/Omar/GetUserInfo/${Email}`);
  }
  Post_User_Info(Email: string, user: any) {
    return this.http.put(`https://localhost:7297/api/Omar/UpdateUserInfo/${Email}`, user);
  }
}
