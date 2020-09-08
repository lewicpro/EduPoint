import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  selected(){
    // localStorage.removeItem('university');
    // localStorage.setItem('university', 'Zhejiangtech')
    this.router.navigate(['/dashboard/Apply'])

  }



}
