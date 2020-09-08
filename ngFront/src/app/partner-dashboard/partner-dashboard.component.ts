import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgAnalyzeModulesHost } from '@angular/compiler';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-partner-dashboard',
  templateUrl: './partner-dashboard.component.html',
  styleUrls: ['./partner-dashboard.component.css']
})
export class PartnerDashboardComponent implements OnInit {
 

  constructor(public router:Router, public ngProgress: NgProgress) {
    if(localStorage.getItem('user')){
      this.router.navigate(['/dashboard/dashHome'])

    }else if(localStorage.getItem('Patneruser')){
      this.router.navigate(['/Partner/Partner-lists'])

    }
     else{

    }
   }

   logout() {
    this.ngProgress.start();
    localStorage.removeItem('userData');
    localStorage.removeItem('Patneruser');
    this.router.navigate(['/Login']);
    this.ngProgress.done();
  }

  ngOnInit() {
  }


  selected(){
    localStorage.removeItem('jina');
    localStorage.setItem('jina', 'john')
    // this.router.navigate(['/dashboard/Apply'])


    console.log(localStorage.getItem('jina'))
  }

}
