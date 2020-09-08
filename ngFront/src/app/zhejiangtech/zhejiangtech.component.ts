import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zhejiangtech',
  templateUrl: './zhejiangtech.component.html',
  styleUrls: ['./zhejiangtech.component.css']
})
export class ZhejiangtechComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }


  selected(){
    localStorage.removeItem('university');
    localStorage.setItem('university', 'Zhejiangtech')
    this.router.navigate(['/dashboard/Apply'])


    // console.log(localStorage.getItem('university'))
  }

}
