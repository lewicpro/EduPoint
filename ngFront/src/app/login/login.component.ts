import { Component, OnInit, } from '@angular/core';
import { Router} from '@angular/router';
import {MatTabChangeEvent} from '@angular/material';
import { UserService } from '../shared/user.service';
import {MatSnackBar} from '@angular/material';
import { NgProgress } from 'ngx-progressbar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit {
  head = 'Login';
  datar;
  username;
  patnerdata;
  email;
  userData3 = {'typed': 'Partner', 'username': '', 'password': ''};
  user;
  header = 'Login as a Partner';
  tabGroup: any;
  userData= {'username': '', 'password': ''};
  responseData;
  userData2 = {'username': '', 'password': '', 'password2': '', 'email': '' };

  constructor(public ngProgress: NgProgress, public router: Router, private configService: UserService, public snackBar: MatSnackBar) {
    if(localStorage.getItem('user')){
      this.router.navigate(['/dashboard/dashHome'])
    } else if(localStorage.getItem('Patneruser') != null){
      this.router.navigate(['/Partner/Partner-lists'])

    }
    else{

    }
 
   
        this.getpartnerdata();
   }




  tabChanged = (tabChangeEvent: MatTabChangeEvent): void => {
    // console.log('tabChangeEvent => ', tabChangeEvent);
    // console.log('index => ', tabChangeEvent.index);
    if (tabChangeEvent.index === 1) {
      this.head = 'Sign up';

    }else {
      this.head = 'Login';

    }
  }


  tabChange = (tabChangeEvent: MatTabChangeEvent): void => {
    // console.log('tabChangeEvent => ', tabChangeEvent);
    // console.log('index => ', tabChangeEvent.index);
    if (tabChangeEvent.index === 1) {
      this.header = 'Sign up as Partner';

    }else {
      this.header = 'Login as Partner ';

    }
  }
  openSnackBar() {
    this.snackBar.open('Type your info correctly', 'Failed', {
      duration: 3000,

    });
  }

  ngOnInit() {
  }
  submit() {
    this.ngProgress.start();
    this.configService.getLoginPosts(this.userData, 'api/auth/token-auth/').then((result) => {
        this.responseData = result;
        // console.log(this.responseData.token);
        // console.log('USERDATA:' + this.userData.username);
        // alert(this.responseData.token);
        // alert(this.userData.ussername)
        localStorage.setItem('userData', this.responseData.token);
        localStorage.setItem('user', this.userData.username);
        this.datar = localStorage.getItem('user');
        console.log(localStorage.getItem('userData'));
        console.log(localStorage.getItem('Patneruser'));
        this.router.navigate(['/dashboard/dashHome']);
        
        }, (err) => {
          this.openSnackBar();
  });
  this.ngProgress.done();

}

  signupstu() {
    this.ngProgress.start();
    console.log('passed');
    this.configService.getLoginPosts(this.userData2, 'UserCreate/').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      console.log(this.userData2.username + this.userData2.password);
      // alert(this.userData.username)
      localStorage.setItem('userData', this.responseData);
      localStorage.setItem('user', this.userData2.username);
      this.router.navigate(['/dashboard/dashHome']);
      
      }, (err) => {
        alert('error');

      });
      this.ngProgress.done();

  }


  loginaspart() {
    // console.log('userdata' + );
    for ( const k of this.patnerdata){
      // console.log('partner' + k.named !== this.userData3.username);
      if (k.named === this.userData3.username ) {
        if (true) {
          this.ngProgress.start();
          this.configService.getLoginPosts(this.userData3, 'api/auth/token-auth/').then((result) => {
          this.responseData = result;
          
          localStorage.setItem('userData', this.responseData.token);
          localStorage.setItem('Patneruser', this.userData3.username);
          // this.datar = localStorage.getItem('userData');
          console.log(localStorage.getItem('userData'));
          console.log(localStorage.getItem('Patneruser'));
          this.router.navigate(['/Partner/Partner-lists']);
          
          }, (err) => {
            this.openSnackBar();
          });

        }else {
        }
      }
    }

    this.ngProgress.done();

  }

  getpartnerdata() {
    this.configService.GetPartner().then(data => {
      this.patnerdata = data;

    });

  }
}
