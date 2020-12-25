import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  cookieValue: string;
  div = "</div>"
  constructor( private cookieService: CookieService ) {


  }

  ngOnInit(): void {
  }

}
