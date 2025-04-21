import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlAdminService {

  constructor(private _http: HttpClient) { }


  contactMessage() {
    return this._http.get(`https://localhost:7297/api/ANASAdmin/getALLMessage`);
  }

  getAllRequst() {
    return this._http.get(`https://localhost:7297/api/ANASAdmin/allRequst`);
  }

  UpdateRequst(id: any, data: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(`https://localhost:7297/api/ANASAdmin/editRequstBooking?id=${id}`, data, { headers });
  }

}
