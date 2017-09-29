import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, NgModel } from '@angular/forms';

import { PATTERNS } from './../../shared/patterns';
import { orderBy, max } from 'lodash';

import { InputComponent } from './../../shared/input/input.component';
import { Checklist } from './../checklist.model';
import { ChecklistService } from './../checklist.service';
import { ChecklistItem } from './../checklist-item/checklist-item.model';

import { Router } from '@angular/router';


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
  mostrarModalConfirmacao = false;

  constructor(
    private fb: FormBuilder
    , private checklistService: ChecklistService
    , private route: Router
  ) { }

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
    this.itensChecklistOrdenado = orderBy(this.itensChecklist, ['posicao'], ['desc']);
    this.checklistForm.controls.descricao.setValue('');
    this.checklistForm.controls.descricaoAbreviada.setValue('');
    iptDescricao.input.valueAccessor._elementRef.nativeElement.focus();

  }

  private obterNovoItemAdicionado(item: ChecklistItem): ChecklistItem {

    const posicao = this.obterProximaPosicao();
    const novoItem = Object.assign({}, item);
    novoItem.posicao = posicao;
    return novoItem;

  }

  private obterProximaPosicao(): number {

    const ultimaPosicao = max(this.itensChecklist.map(x => x.posicao));
    if (!ultimaPosicao) {
      return 1;
    }
    return ultimaPosicao + 1;

  }

  public abrirModalConfirmacao(): void {
    this.mostrarModalConfirmacao = true;
  }

  public salvarChecklist(): void {

    const novoChecklist = new Checklist(this.nomeDoChecklist, this.itensChecklist);
    console.log('anteste do post', novoChecklist);

    this.checklistService.salvarChecklist(novoChecklist)
      .subscribe((id: any) => {
        console.log('checklist salvo. Id:', id);
        this.mostrarModalConfirmacao = false;
        // TODO: Redirecionar usuario;
        //this.route.navigate(['/']);
      });
  }

  private cancelou(): void {
    this.mostrarModalConfirmacao = false;
  }


}
