import { Component } from '@angular/core';
import {FetchPlansService, Plan} from '../apis/fetch-plans.service';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  plan: Plan=new Plan();
  plans: Plan[];

  constructor(private service: FetchPlansService) {}
  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit(){
    this.service.getAllPlans().subscribe(response =>{
      this.plans=response;
      console.log(this.plans);
    });

  }

}
