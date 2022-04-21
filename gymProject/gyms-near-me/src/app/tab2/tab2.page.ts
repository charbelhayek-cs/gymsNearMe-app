import { Component } from '@angular/core';
import { FetchGymsService, Gym } from '../apis/fetch-gyms.service';
import {FetchPlansService, Plan} from '../apis/fetch-plans.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
gym: Gym = new Gym(); //initialized the class with it's constructor it is a must
 gyms: Gym[];
 plan: Plan=new Plan();//initialized the plan class
  plans: Plan[];
  searchTerm: string;// this is the thing that the user will type in order to search in the search bar

  //both of the classes will be displayed in this page and the search bar will then filter them out
  constructor(private service: FetchGymsService, private service2: FetchPlansService) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(){
    this.service.getAllGyms().subscribe(response =>{
      this.gyms=response;
      console.log(this.gyms);
    });// the gyms content will be displayed on initialization of the page
      this.service2.getAllPlans().subscribe(response1 =>{
        this.plans=response1;
        console.log(this.plans);
      });// the plans contenet will be displayed on initialization of the page to

  }

}
