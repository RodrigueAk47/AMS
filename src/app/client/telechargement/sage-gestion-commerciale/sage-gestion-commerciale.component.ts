import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sage-gestion-commerciale',
  templateUrl: './sage-gestion-commerciale.component.html',
  styleUrls: ['./sage-gestion-commerciale.component.css']
})
export class SageGestionCommercialeComponent implements OnInit {

  constructor() { }
  title = 'Sage Gestion Commerciale';
  version = 'i7';
  apropos = "Sage Gestion Commerciale est une solution logicielle destinée à créer et gérer des documents commerciaux. Vous pourrez grâce à elle élaborer des devis, commandes, bons de livraison et factures, idéal pour simplifier au maximum la gestion de votre entreprise mais aussi pour développer votre activité. Vous pourrez grâce à Sage Gestion Commerciale  suivre votre rentabilité et suivre votre activité à l'aide de tableaux de bord.";
  capture1 = "assets/images/logiciel/capturegc.png";
  capture2 = "assets/images/logiciel/capturegc1.png";
  taille = "200 MB";
  langue = "multilingue";
  lien = "https://proud-morning-a1e4.rodrigueassohou.workers.dev/Logiciels/Sage.100.Gestion.Commerciale.i7.v8.50.Incl.Keygen.Multilingual-NGEN.rar?rootId=0ABWapVYci3JeUk9PVA";
  commentaire = "merci";
  commentateur = "Gohi Jean";
  ngOnInit(): void {
  }

}
