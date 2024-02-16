import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from './data.service';
import { AttractionInterface } from '../Interface/attraction.interface';
import { MessageInterface } from '../Interface/message.interface';
import {CritiqueInterface} from "../Interface/critique.interface";

@Injectable({
  providedIn: 'root',
})

export class CritiqueService {

    constructor(private dataService: DataService) {

    }

    public getAllCritique() : Observable<CritiqueInterface[]> {
      const url = "http://localhost:5000/critique"
      const data = this.dataService.getData(url);
      return data as Observable<CritiqueInterface[]>;
    }

    public createCritique(critique: CritiqueInterface): Observable<MessageInterface> {
      const url = "http://localhost:5000/critique/create";
      const data = this.dataService.postData(url,critique);
      return data as Observable<MessageInterface>;
    }

    public deleteCritique(critique_id: number): Observable<MessageInterface> {
      const url = "http://localhost:5000/critique/" + critique_id;
      const data = this.dataService.deleteData(url);
      return data as Observable<MessageInterface>;
    }

}
