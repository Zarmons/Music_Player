import { Component } from '@angular/core';
import { RecentService } from '../shared/services/recent.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent {

  constructor(private recentService: RecentService) {}

  ngOnInit() {
    this.historyUser();
  }

  historyUser(){
    this.recentService.getUserHistory().subscribe( data =>{
      console.log(data);
    });
  }

}
