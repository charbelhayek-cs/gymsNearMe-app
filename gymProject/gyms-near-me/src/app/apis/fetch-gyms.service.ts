import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchGymsService {
  private url='http://localhost/back-end/';

  constructor() { }
}
