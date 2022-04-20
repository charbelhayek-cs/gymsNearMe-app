import { Component } from '@angular/core';
import { FetchGymsService, Gym } from '../apis/fetch-gyms.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
gyms: Gym[];// the interface that i did in the fetch gyms file .ts
  constructor(private service: FetchGymsService) {}
  ngOninit(){
    //on start of every ionic application in this case the tab1
    this.service.getAllGyms().subscribe(response =>{//subscribe will catch the response
      this.gyms=response;
    });
  }

}

