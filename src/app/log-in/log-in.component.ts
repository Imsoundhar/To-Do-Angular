import { User } from './../user';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  userName!: string;
  passWord!: string;
  message!: string;

  constructor(private router: Router,
    private authService: AuthService) { }

  login() {
    let user = { id: 0, name: this.userName, passWord: this.passWord }
    if (user.name != undefined && user.passWord != undefined) {
      this.getVerifiedUser(user);
    } else {
      this.message = "Please enter User Name Or Password";
    }
  }

  getVerifiedUser(user: User) {
    this.authService.getUser(user).subscribe(response => {
      let availableUser: User = response as User;
      if (availableUser.name != null && availableUser.passWord != null) {
        sessionStorage.setItem('user', JSON.stringify(response));
        this.homePage();
      } else {
        this.message = "Invalid user name or password";
      }
    });
  }

  createAccount() {
    let user: User = { id: 0, name: this.userName, passWord: this.passWord, }
    if (user.name != undefined && user.passWord != undefined) {
      this.authService.createAccount(user).subscribe(response => {
        let newUser = response as User;
        if (newUser.name != null && newUser.passWord != null) {
          sessionStorage.setItem('user', JSON.stringify(response));
          this.homePage();
        } else {
          this.message = "Incorrect user name or password";
        }
      });
    } else {
      this.message = "Please enter User Name Or Password";
    }
  }

  homePage() {
    this.router.navigate(['todo']);
  }
}
