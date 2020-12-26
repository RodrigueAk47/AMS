import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acrobat',
  templateUrl: './acrobat.component.html',
  styleUrls: ['./acrobat.component.css']
})
export class AcrobatComponent implements OnInit {

  constructor() { }
  title = 'Adobe Acrobat Pro DC';
  version = '2020';
  apropos = "Adobe Acrobat est une famille de logiciels mis au point par Adobe Systems, pour manipuler des documents électroniques au format PDF. Le programme Adobe Acrobat Reader DC est disponible gratuitement sur le site Web d'Adobe et permet l'affichage et l'impression des fichiers PDF.";
  capture1 = "assets/images/empty.png"
  capture2 = "assets/images/empty.png"
  taille = "991,3 MB";
  langue = "multilingue";
  lien = "https://proud-morning-a1e4.rodrigueassohou.workers.dev/Acrobat.Pro.DC.2020/Adobe.Acrobat.Pro.DC.2020.u7.Multilingual.iso?rootId=0AOBp8sUeMESVUk9PVA";
  commentaire = "Fantastique";
  commentateur = "Michel";
  div = "</div>"
  ngOnInit(): void {
  }

}
