import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premierepro',
  templateUrl: './premierepro.component.html',
  styleUrls: ['./premierepro.component.css']
})
export class PremiereproComponent implements OnInit {

  constructor() { }
  title = 'Adobe Première Pro';
  version = '2020';
  apropos = "Adobe Premiere Pro, anciennement appelé Adobe Premiere, est un logiciel de montage vidéo. Il est intégré aux versions Production Premium et Master Collection de la Creative Suite.";
  capture1 = "assets/images/empty.png"
  capture2 = "assets/images/empty.png"
  taille = "1,9 GB";
  langue = "multilingue";
  lien = "https://proud-morning-a1e4.rodrigueassohou.workers.dev/Premiere.Pro.2020/Adobe.Premiere.Pro.2020.u9.Multilingual.iso?rootId=0AOBp8sUeMESVUk9PVA";
  commentaire = "Fantastique";
  commentateur = "Michel";
  div = "</div>"

  ngOnInit(): void {
  }

}
