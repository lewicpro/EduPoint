import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user;
  datar;
  email;
  username;
  button;

  constructor(public configService: UserService, public router: Router, ) {
    this.check ();
    this.datar = localStorage.getItem('user');
    this.configService.getuser().then(data => {
      this.user = data;
      for (const k of this.user) {
        if (k.username === this.datar ) {
          this.email = k.email;
          this.username = k.username;




        }
      }

    }

    );
  }

  ngOnInit() {
  }

  check() {
    if (this.datar != null) {
     this.button = this.username;

      this.router.navigate(['/dashboard/dashHome']);


    }else {
      this.router.navigate(['/Login']);
      this.button = 'Account';
    }
  }

}
