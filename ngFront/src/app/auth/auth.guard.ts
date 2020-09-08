import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { console.log('here'); }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('userData') != null) {
      console.log(localStorage.getItem('guard: '+ 'user'));
      return true;
    }else {
      console.log('here 2');
      this.router.navigate(['Login']);
      return false;

    }
  }
}
