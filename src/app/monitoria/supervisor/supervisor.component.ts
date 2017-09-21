import { Operador } from './../operador.model';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Supervisor } from './supervisor.model';
import { SupervisorService } from './supervisor.service';
import { DetalhesGravacaoService } from '../detalhes-gravacao/detalhes-gravacao.service';

@Component({
  selector: 'w-supervisor',
  templateUrl: './supervisor.component.html'
})
export class SupervisorComponent implements OnInit {

  supervisor: Observable<Supervisor>;

  constructor(private supervisorService: SupervisorService,
    private detalhesGravacaoService: DetalhesGravacaoService,
    private route: ActivatedRoute) { }

  ngOnInit() {

    // this.supervisorService.supervisoresPorId(1)
    //   .subscribe(supervisor => this.supervisor = supervisor);


    this.supervisor = this.supervisorService.supervisoresPorId(1);

  }

  public buscarGravacao(): void {


  }

}
