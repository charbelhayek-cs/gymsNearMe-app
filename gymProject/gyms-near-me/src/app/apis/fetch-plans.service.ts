import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Plan{
  planId: string;
  planName: string;
  planCreator: string;
  planInfo: string;
}

@Injectable({
  providedIn: 'root'
})
export class FetchPlansService {

 private url='http://localhost/back-end/';
  constructor(private http: HttpClient) { }

  getAllPlans(){
    return this.http.get<[Plan]>(this.url+'getPlans.php');
  }
}
