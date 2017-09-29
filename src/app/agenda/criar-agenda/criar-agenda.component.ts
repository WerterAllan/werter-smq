import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, AbstractControl, NgModel } from '@angular/forms';

import { PATTERNS } from './../../shared/patterns';
import { ValidacoesAgenda } from './validacoes-agenda';

@Component({
  selector: 'w-criar-agenda',
  templateUrl: './criar-agenda.component.html'
})
export class CriarAgendaComponent implements OnInit {

  private novaAgendaForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
    this.novaAgendaForm = this.fb.group({
      nome: this.fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      quantidade: this.fb.control('3', [Validators.required, Validators.maxLength(1), Validators.pattern(PATTERNS.oneUntilNine)]),
      periodos: this.fb.array([])
    });


  }

  public gerarPeriodos(qtd: number) {
    this.limparPeriodosAnteriores();
    this.adicionarPeriodos(qtd);
  }

  private limparPeriodosAnteriores(): void {
    const periodosControl = <FormArray>this.novaAgendaForm.controls['periodos'];
    while (periodosControl.length > 0) {
      periodosControl.controls.pop();
    }
  }

  private adicionarPeriodos(qtd: number): void {

    const forms = this.criarFormGrupos(qtd);
    const periodosControl = <FormArray>this.novaAgendaForm.controls['periodos'];
    forms.forEach(form => periodosControl.push(form));
    this.log();
  }

  private criarFormGrupos(qtd: number): FormGroup[] {
    const itens = Array.from(Array(qtd).keys());
    const forms: FormGroup[] = [];

    itens.forEach(item => {

      const formGroup = this.fb.group({
        // doDia: this.fb.control('', [Validators.required, Validators.pattern(PATTERNS.dataEntreUmEDoisDigitos)]),
        // ateODia: this.fb.control('', [Validators.required, Validators.pattern(PATTERNS.dataEntreUmEDoisDigitos)]),

        doDia: [1, [Validators.required, Validators.pattern(PATTERNS.dataEntreUmEDoisDigitos)]],
        ateODia: [31, [Validators.required, Validators.pattern(PATTERNS.dataEntreUmEDoisDigitos)]]

      }, { validator: ValidacoesAgenda.periodoDeDatasValidas });

      forms.push(formGroup);
    });

    return forms;
  }

  private log(): void {
    /**
     * Um log para testar o formulario
     */
    console.log('array form', this.novaAgendaForm.controls['periodos']);
  }

  public listarErros(): void {
    this.log();
  }




}

