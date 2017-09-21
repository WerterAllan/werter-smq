import { ErrorHandler } from './../../shared/app.error-handler';
import { DetalhesGravacao } from './detalhes-gravacao.model';
import { SMQ_API } from './../../app.api';

// angular
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DetalhesGravacaoService {

  constructor(private http: Http) { }

  public buscarGravacaoDoOperador(operadorId: number): Observable<DetalhesGravacao> {

    return this.http.get(`${SMQ_API}/gravacoes?operadorId=${operadorId}`)
      .map(response => response.json())
      .do( resposta => console.log(resposta) )
      .catch(ErrorHandler.handlerError);

  }

}
