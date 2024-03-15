import { Component, Input, OnInit } from '@angular/core';
import { CritiqueInterface } from '../Interface/critique.interface';
import { CritiqueService } from '../Service/critique.service';

@Component({
  selector: 'app-critique',
  templateUrl: './critique.component.html',
  styleUrls: ['./critique.component.scss']
})

export class CritiqueComponent implements OnInit {
  @Input() critiqueId: number;
  critique!: CritiqueInterface;

  constructor(private critiqueService: CritiqueService) {
    this.critiqueId = 0; // Initialise la propriété critiqueId
  }

  ngOnInit(): void {
    this.getCritique();
  }

  getCritique(): void {
    this.critiqueService.getCritique(this.critiqueId).subscribe((data) => {
      this.critique = data;
    });
  }
}
