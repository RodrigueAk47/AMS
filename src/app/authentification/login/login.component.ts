import { Component, NgModule, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataUser = {
    email: '',
    password: '',
  };

  constructor(
    public afAuth: AngularFireAuth
  ) {}

  login() {
    console.log('email:' + this.dataUser.email);
    console.log('password:' + this.dataUser.password);

  };




  ngOnInit(): void {
  }

}
