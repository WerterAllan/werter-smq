import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgModel } from '@angular/forms';

import { orderBy, max } from 'lodash';


import { PATTERNS } from './../../shared/patterns';
import { InputComponent } from './../../shared/input/input.component';
import { ChecklistItem } from './../checklist-item/checklist-item.model';


@Component({
  selector: 'w-criar-checklist',
  templateUrl: './criar-checklist.component.html'
})
export class CriarChecklistComponent implements OnInit {

  editarNomeDoChecklist = true;
  nomeChecklistValido = false;
  nomeDoChecklist: string;
  itensChecklist: ChecklistItem[] = [];
  itensChecklistOrdenado: ChecklistItem[] = [];
  checklistForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.checklistForm = this.fb.group({
      descricao: this.fb.control('', [Validators.required, Validators.minLength(10)]),
      descricaoAbreviada: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      peso: this.fb.control('', [Validators.required, Validators.pattern(PATTERNS.decimalNumber), Validators.maxLength(2)]),
      eEliminatoria: this.fb.control('', [Validators.required]),
    });

  }

  public definirNomeChecklist(model: NgModel): void {

    if (model.valid) {
      this.nomeDoChecklist = model.value;
      this.editarNomeDoChecklist = false;
      this.nomeChecklistValido = true;
    }


  }

  public definirNovoNomeDoChecklist(): void {
    this.editarNomeDoChecklist = true;
  }

  public adicionarItem(item: ChecklistItem, iptDescricao: InputComponent): void {

    const novoItem = this.obterNovoItemAdicionado(item);
    this.itensChecklist.push(novoItem);
    this.itensChecklistOrdenado = orderBy(this.itensChecklist, ['id'], ['desc']);
    this.checklistForm.controls.descricao.setValue('');
    this.checklistForm.controls.descricaoAbreviada.setValue('');
    iptDescricao.input.valueAccessor._elementRef.nativeElement.focus();

  }

  private obterNovoItemAdicionado(item: ChecklistItem): ChecklistItem {

    const id = this.obterProximoId();
    const novoItem = Object.assign({}, item);
    novoItem.id = id;
    return novoItem;

  }

  private obterProximoId(): number {

    const ultimoId = max(this.itensChecklist.map(x => x.id));
    if (!ultimoId) {
      return 1;
    }
    return ultimoId + 1;

  }

  public salvarChecklist(): void {
    console.log('salvar checklist', this.itensChecklist);
  }


}
