import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Gym{// changed this one from interface to reglar class
  //it will check what does the table gym contain in the database
  gymId: string;
  gymName: string;
  gymLocation: string;
  gymInfo: string;
  gymRating: string;
  monthlyFees: string;
  imgURL: string;

}
@Injectable({
  providedIn: 'root'
})
export class FetchGymsService {
  private url='http://localhost/back-end/';

  constructor(private http: HttpClient) { }
  getAllGyms(){
    //return all the gyms from the database
    return this.http.get<[Gym]>(this.url+'getGyms.php');
    //get of type Gym which is the interface created
  }
}
