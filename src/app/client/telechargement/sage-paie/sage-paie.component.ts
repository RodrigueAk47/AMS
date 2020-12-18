import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sage-paie',
  templateUrl: './sage-paie.component.html',
  styleUrls: ['./sage-paie.component.css']
})
export class SagePaieComponent implements OnInit {

  constructor() { }
  title = 'Sage Paie';
  version = 'i7';
  apropos = "Sage paie est un outil nécessaire aux entreprises : en véritable assistant, il permet de dématérialiser, simplifier et automatiser l’ensemble des processus administratifs et comptables relatifs à la gestion de la paie. Grâce à un logiciel de paie, les entreprises de toute taille vont pouvoir synthétiser l’ensemble des données sociales ou encore éditer les bulletins de salaire.";
  capture1 = "assets/images/empty.png"
  capture2 = "assets/images/empty.png"
  taille = "800 MB";
  langue = "multilingue";
  lien = "";
  commentaire = "Fantastique";
  commentateur = "Michel";
  ngOnInit(): void {
  }

}
