import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  value;

  constructor(private router: Router ) {
  }

  ngOnInit() {
  }

  // goAgain() {
  //   this.value = 1;
  //   this.router.navigate(['/Programs', {outlets: {'majors': [this.value]}}]);
  // }

  // goReq() {
  //   this.value = 2;
  //   this.router.navigate(['/Programs', {outlets: {'requirements': [this.value]}}]);
  // }

}
