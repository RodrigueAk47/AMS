import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photoshop',
  templateUrl: './photoshop.component.html',
  styleUrls: ['./photoshop.component.css']
})
export class PhotoshopComponent implements OnInit {

  constructor() { }
  title = 'Adobe Photoshop';
  version = '2020';
  apropos = "Photoshop est un logiciel.";
  capture1 = "assets/images/empty.png"
  capture2 = "assets/images/empty.png"
  taille = "1,6 GB";
  langue = "multilingue";
  lien = "";
  commentaire = "Fantastique";
  commentateur = "Michel";
  div = "</div>"

  ngOnInit(): void {
  }

}
