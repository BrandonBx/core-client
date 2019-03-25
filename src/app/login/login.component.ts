import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: string;
  currUser: User;

  constructor(
    private authService: AuthService) {
  }

  ngOnInit() {
  }

  login(username, password){
    console.log('login');
    this.authService.login(username, password).subscribe(
      token => {this.token = token["token"]; localStorage.setItem('token', token["token"]); this.connectCurrUser()} // Retrieve json token + store it
    )
  }

  connectCurrUser(){
    this.authService.getCurrUser(this.token).subscribe(
      user => {this.currUser = new User().deserialize(user), localStorage.setItem('idCurrUser', this.currUser.id.toString())}
    )
  }
}
