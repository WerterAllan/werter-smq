import { RequestOptions, Headers } from '@angular/http';
// outros imports
import 'reflect-metadata';

import { SMQ_API } from './../app.api';
// angular
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

// modelos e serviços
import { Checklist } from './checklist.model';
import { ErrorHandler } from './../shared/app.error-handler';


@Injectable()
export class ChecklistService {
  constructor(private http: Http) { }

  public buscarChecklist(id: number): Observable<Checklist> {
    return this.http.get(`${SMQ_API}/checklist?id=${id}`)
      .map(response => response.json()[0])
      .do(retorno => console.log('retorno', retorno))
      .catch(ErrorHandler.handlerError);
  }

  public salvarChecklist(checklist: Checklist): Observable<string> {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const jsonChecklist = JSON.stringify(checklist);

    return this.http
      .post(`${SMQ_API}/checklist`, jsonChecklist, new RequestOptions({ headers: headers }))
      .map(response => response.json())
      .map(x => x.id)
      ;

  }


}
