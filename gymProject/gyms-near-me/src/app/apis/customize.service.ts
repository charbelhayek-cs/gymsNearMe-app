import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
export class Plan{
  planName: string;
  planCreator: string;
  planInfo: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomizeService {
   private url='http://localhost/back-end/';

  constructor(private http: HttpClient) { }
  addPlan(plan: Plan){
   return this.http.post(this.url+'customize.php', plan);
  }
}
