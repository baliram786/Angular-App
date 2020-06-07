import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private finaldata = [];
  private apiurl = "http://61.247.237.95:8077/api/Login/GetEmploeeDetails/17644";
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get(this.apiurl);
 }
}

