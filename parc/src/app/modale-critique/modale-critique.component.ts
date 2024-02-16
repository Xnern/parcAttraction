import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'; // Importez FormsModule et ReactiveFormsModule depuis '@angular/forms'
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {CritiqueService} from "../Service/critique.service";

@Component({
  selector: 'app-modale-critique',
  templateUrl: './modale-critique.component.html',
  imports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  styleUrls: ['./modale-critique.component.scss'],
  standalone: true
})
export class ModaleCritiqueComponent {
  critiqueForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModaleCritiqueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nom:string, attraction_id: number},
    private fb: FormBuilder,
    private http: HttpClient,
    private _snackBar: MatSnackBar,
    private critiqueService: CritiqueService
  ) {
    this.critiqueForm = this.fb.group({
      attraction_id: [this.data.attraction_id],
      prenom: [''],
      nom: [''],
      note: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
      commentaire: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ajouterCritique(): void {
    if (this.critiqueForm.valid) {
      const formData = this.critiqueForm.value;

      //Utiliser le critique service.postCritique pour ajouter la critique
      this.critiqueService.createCritique(formData).subscribe((data) => {
        if(data.result == true){
          this._snackBar.open("Critique ajoutée", "Fermer", {
            duration: 2000,
          });
        }
        this.fermerModale();

      });
    }
  }

  fermerModale(): void {
    this.dialogRef.close();
  }
}
