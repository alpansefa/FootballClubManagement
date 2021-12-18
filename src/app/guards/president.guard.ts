import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { User } from '../models/iuser.model';

@Injectable({
  providedIn: 'root'
})
export class PresidentGuard implements CanActivate {

  user!: User;
  constructor(private router: Router) { }

  canActivate(): boolean {

    this.user = JSON.parse(sessionStorage.getItem('token') as string)

    if (this.user) {
      if (this.user.role === "president")
        return true;
      else this.router.navigate(['home']);
    }
    else if (!this.user) {
      this.router.navigate(['login']);
    }
    else {
      this.router.navigate(['home']);
    }
    return false;
  }

}
