import { Component, OnInit, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { RadioOption } from './radio-option.model';

@Component({
  selector: 'w-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Output() mudouOpcao = new EventEmitter<string>();

  @Input() options: RadioOption[];
  value: any;
  onChange: any;
  @Input() indiceLinha: number;

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
    this.mudouOpcao.emit('radio alterado');
  }


  /**
     * Write a new value to the element.
     * Quando elas querem passar um valor para u elemento
     */
  writeValue(obj: any): void {
    this.value = obj;
  }
  /**
   * Set the function to be called when the control receives a change event.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any): void { }
  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void { }

}
