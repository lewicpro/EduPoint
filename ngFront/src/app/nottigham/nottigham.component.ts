import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nottigham',
  templateUrl: './nottigham.component.html',
  styleUrls: ['./nottigham.component.css']
})
export class NottighamComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }




  selected(){
    localStorage.removeItem('university');
    localStorage.setItem('university', 'Nottigham')
    this.router.navigate(['/dashboard/Apply'])


    // console.log(localStorage.getItem('university'))
  }

}
