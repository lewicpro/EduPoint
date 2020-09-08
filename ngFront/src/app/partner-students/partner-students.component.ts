import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-partner-students',
  templateUrl: './partner-students.component.html',
  styleUrls: ['./partner-students.component.css']
})
export class PartnerStudentsComponent implements OnInit {
  all;
  Partner;
  constructor(public restframework:UserService) {
    this.Partner = localStorage.getItem('Patneruser');

    this. restframework.getPersonalLists().then(data=>{
      this.all = data;
      console.log(this.all)

    })

  }

  ngOnInit() {
  }

}
