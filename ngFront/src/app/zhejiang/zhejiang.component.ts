import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zhejiang',
  templateUrl: './zhejiang.component.html',
  styleUrls: ['./zhejiang.component.css']
})
export class ZhejiangComponent implements OnInit {

  constructor( public router:Router) { }

  ngOnInit() {
  }




  selected(){
    localStorage.removeItem('university');
    localStorage.setItem('university', 'Zhejiang')
    this.router.navigate(['/dashboard/Apply'])


    // console.log(localStorage.getItem('university'))
  }

}
