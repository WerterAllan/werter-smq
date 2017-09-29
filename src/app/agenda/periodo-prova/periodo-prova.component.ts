import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'w-periodo-prova',
  templateUrl: './periodo-prova.component.html'
})
export class PeriodoProvaComponent {

  @Input()
  public periodoProvaForm: FormGroup;

}
