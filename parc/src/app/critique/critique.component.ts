import { Component, Input, NgModule, OnInit } from '@angular/core';
import { CritiqueInterface } from '../Interface/critique.interface';
import { CritiqueService } from '../Service/critique.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-critique',
  templateUrl: './critique.component.html',
  styleUrls: ['./critique.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class CritiqueComponent implements OnInit {
  @Input() attractionId: number;
  critiques!: CritiqueInterface[];

  constructor(private critiqueService: CritiqueService, private route: ActivatedRoute) {
    this.attractionId = 0; // Initialise la propriété critiqueId
    this.critiques = [];
  }

  ngOnInit(): void {
    // Récupérez l'identifiant depuis les paramètres de route
    this.route.params.subscribe(params => {
      // Assurez-vous que le paramètre est bien un nombre
      this.attractionId = +params['id']; // Remplacez 'id' par le nom réel du paramètre tel que défini dans vos routes
      this.getCritiques();
    });
  }
  getCritiques(): void {
    this.critiqueService.getCritiquesByAttraction(this.attractionId).subscribe(
      (data: CritiqueInterface[]) => { // Correctly handle an array of CritiqueInterface
        console.log(data)
        this.critiques = data;
      },
      (error: any) => { // Handle any errors
        console.error('Une erreur s\'est produite lors de la récupération des critiques :', error);
      }
    );
  }

}
