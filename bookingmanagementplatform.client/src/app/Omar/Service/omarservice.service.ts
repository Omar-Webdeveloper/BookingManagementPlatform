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
}
