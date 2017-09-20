import { ChecklistItem } from './checklist-item.model';
import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from './../../shared/radio/radio-option.model';

@Component({
  selector: 'w-checklist-item',
  templateUrl: './checklist-item.component.html'
})
export class ChecklistItemComponent implements OnInit {

  @Input() itens: ChecklistItem[] = [
    {
      id: 1, descricao: 'O operador se apresentou como funcionario da Werter S/A',
      descricaoAbreviada: '',
      peso: 5,
      eEliminatoria: false,
      atendeuItem: ''
    },
    {
      id: 2, descricao: 'O operador se apresentou como funcionario da Werter S/A',
      descricaoAbreviada: '',
      peso: 5,
      eEliminatoria: false,
      atendeuItem: ''
    },
    {
      id: 3, descricao: 'O operador se apresentou como funcionario da Werter S/A',
      descricaoAbreviada: '',
      peso: 5,
      eEliminatoria: false,
      atendeuItem: ''
    },
  ];

  atendeuItemOptions: RadioOption[] = [
    { label: 'Sim', value: 'S' },
    { label: 'Não', value: 'N' },
    { label: 'N/A', value: 'A' }
  ];

  constructor() { }

  ngOnInit() {
  }

  mostrar(item: ChecklistItem) {
    console.log('checklist', item);
  }

  public mudouAvaliacao(item: any): void {

    console.log('mudou', item);

  }


}
