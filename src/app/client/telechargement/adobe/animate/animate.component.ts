import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css']
})
export class AnimateComponent implements OnInit {

  constructor() { }
  title = 'Adobe Animate';
  version = '2020';
  apropos = "Adobe Animate est un programme de création multimédia et d'animation par ordinateur développé par Adobe Systems.";
  capture1 = "assets/images/empty.png"
  capture2 = "assets/images/empty.png"
  taille = "1,9 GB";
  langue = "multilingue";
  lien = "https://proud-morning-a1e4.rodrigueassohou.workers.dev/Animate.2020/Adobe.Animate.2020.u6.Multilingual.iso?rootId=0AOBp8sUeMESVUk9PVA";
  commentaire = "Fantastique";
  commentateur = "Michel";
  div = "</div>"
  ngOnInit(): void {
  }

}
