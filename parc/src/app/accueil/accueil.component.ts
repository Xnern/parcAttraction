import { Component } from '@angular/core';
import { AttractionService } from '../Service/attraction.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AttractionInterface } from '../Interface/attraction.interface';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ModaleCritiqueComponent } from '../modale-critique/modale-critique.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

  constructor(public attractionService: AttractionService, public dialog: MatDialog)
  {}

  public attractions: Observable<AttractionInterface[]> = this.attractionService.getAllAttraction()

  openModal(attraction_id: number) {
    this.dialog.open(ModaleCritiqueComponent, {
      width: '400px', // Largeur de la modale
      data: {
        attraction_id: attraction_id
      } // Données à passer à la modale (le cas échéant)
    });
  }
}
