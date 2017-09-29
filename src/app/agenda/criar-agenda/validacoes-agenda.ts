import { PATTERNS } from './../../shared/patterns';
import { AbstractControl, ReactiveFormsModule, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
export class ValidacoesAgenda {

  // ---
  // PUBLIC METHODS.
  // ---

  public static periodoDeDatasValidas(group: AbstractControl): { [key: string]: boolean } {

    const doDiaControl = group.get('doDia');
    const ateODiaControl = group.get('ateODia');

    if (ValidacoesAgenda.controleNaoEstaPresente(doDiaControl, ateODiaControl)) {
      return null;
    }

    const eValido = ValidacoesAgenda.datasEstaoEntreUmValorValido(doDiaControl.value, ateODiaControl.value);

    return eValido ? null : { periodoInvalido: true };
  }

  public static ValidacoesParaDia(): any {
    return [Validators.required, Validators.pattern(PATTERNS.number)];
  }




  // ---
  // PRIVATE STATIC METHODS.
  // ---

  private static controleNaoEstaPresente(doDiaControle: AbstractControl,
    ateODiaControle: AbstractControl): boolean {

    if (!doDiaControle || !ateODiaControle) {
      return true;
    }

    return false;

  }

  private static datasEstaoEntreUmValorValido(inicialIncluso: number, maximoIncluso: number): any {
        
    const osValoresNaoForamDefinidos = !inicialIncluso || !maximoIncluso;
    if (osValoresNaoForamDefinidos) {
      return false;
    }

    const valoresIguais = inicialIncluso === maximoIncluso;
    if (valoresIguais) {
      return true;
    }


    const dataFinalEMaiorQueADataInicial = maximoIncluso > inicialIncluso;
    if (dataFinalEMaiorQueADataInicial) {
      return true;
    }

    return false;
  }

}
