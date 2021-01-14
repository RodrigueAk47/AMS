import { Component } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDH5BrfJ3XexfWTqyLkHENeGSEsSncupyM",
      authDomain: "ams-stefy.firebaseapp.com",
      databaseURL: "https://ams-stefy-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "ams-stefy",
      storageBucket: "ams-stefy.appspot.com",
      messagingSenderId: "638067250330",
      appId: "1:638067250330:web:0f3ffa1cd7c0a44e427b23",
      measurementId: "G-MG6VWBMN6B"
      };
      firebase.initializeApp(firebaseConfig);
  }
}

