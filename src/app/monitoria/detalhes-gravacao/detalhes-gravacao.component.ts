import { Component, OnInit, Input } from '@angular/core';

import { DetalhesGravacao } from './detalhes-gravacao.model';

@Component({
  selector: 'w-detalhes-gravacao',
  templateUrl: './detalhes-gravacao.component.html'
})
export class DetalhesGravacaoComponent implements OnInit {

  @Input() detalhesDaGravacao: DetalhesGravacao;

  constructor() { }

  ngOnInit() {
  }

}
