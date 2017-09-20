import { SMQ_API } from './../app.api';
// angular
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';

// modelos e serviços
import { Checklist } from './checklist.model';

import 'reflect-metadata';



@Injectable()
export class ChecklistService {

  constructor(private http: Http) { }

  // public buscarChecklist(id: number): Observable<Checklist> {
  //   return this.http.get(`${SMQ_API}/checklist?id=${id}`);
  // }


}
