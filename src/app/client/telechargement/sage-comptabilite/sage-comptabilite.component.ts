import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sage-comptabilite',
  templateUrl: './sage-comptabilite.component.html',
  styleUrls: ['./sage-comptabilite.component.css']
})
export class SageComptabiliteComponent implements OnInit {

  constructor() { }
  title = 'Sage Comptabilite';
  version = 'i7';
  apropos = " Sage Comptabilité i7 est solution de gestion comptable et financière adaptée aux petites entreprises pour vous accompagner au quotidien dans un contexte fiscal et économique en perpétuelle évolution. Le logiciel vous assiste dès la saisie débit/crédit jusqu'à la clôture de l'exercice en passant par le lettrage et les rapprochements bancaires. Sage Comptabilité i7 met à votre disposition tous les outils indispensables à la gestion de vos comptes : plan comptable,tableaux de bord, journaux, déclaration de TVA, modèles d'écritures comptables: any, etc. Dans cette édition i7, vous disposez d'un assistant facilitant la mise en place des paramétrages de TVA pour une télédéclaration et télépaiement de votre TVA en toute simplicité.";
  div = "</div>"
  ngOnInit(): void {
  }

}
