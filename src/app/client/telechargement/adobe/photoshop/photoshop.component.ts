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
  apropos = "Photoshop est un logiciel de retouche, de traitement et de dessin assisté par ordinateur, lancé en 1990 sur MacOS puis en 1992 sur Windows. Édité par Adobe, il est principalement utilisé pour le traitement des photographies numériques, mais sert également à la création ex nihilo d’images. ";
  capture1 = "assets/images/empty.png"
  capture2 = "assets/images/empty.png"
  taille = "2,0 GB";
  langue = "multilingue";
  lien = "https://proud-morning-a1e4.rodrigueassohou.workers.dev/Photoshop.2020/Adobe.Photoshop.2020.u12.Multilingual.iso?rootId=0AOBp8sUeMESVUk9PVA";
  commentaire = "Fantastique";
  commentateur = "Michel";
  div = "</div>"

  ngOnInit(): void {
  }

}
