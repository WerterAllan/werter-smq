import { ChecklistItem } from './checklist-item.model';
import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from './../../shared/radio/radio-option.model';

@Component({
  selector: 'w-checklist-item',
  templateUrl: './checklist-item.component.html'
})
export class ChecklistItemComponent implements OnInit {

  @Input() itens: ChecklistItem[] = [];

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
