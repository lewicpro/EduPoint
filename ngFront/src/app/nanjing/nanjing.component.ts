import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nanjing',
  templateUrl: './nanjing.component.html',
  styleUrls: ['./nanjing.component.css']
})
export class NanjingComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }



  selected(){
    localStorage.removeItem('university');
    localStorage.setItem('university', 'Nanjing')
    this.router.navigate(['/dashboard/Apply'])


    // console.log(localStorage.getItem('university'))
  }

}
