import { ErrorHandler } from './../../shared/app.error-handler';
import { SMQ_API } from './../../app.api';
import { Supervisor } from './supervisor.model';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';



@Injectable()
export class SupervisorService {

  constructor(private http: Http) { }

  supervisoresPorId(id: number): Observable<Supervisor> {

    console.log("id", id);

    return this.http.get(`${SMQ_API}/supervisores?id=${id}`)
      .map(response => response.json()[0])
      .do(retorno => console.log('retorno', retorno))
      .catch(ErrorHandler.handlerError);

  }


}
