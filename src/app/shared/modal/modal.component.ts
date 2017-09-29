import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'w-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {

  @Input() conteudo: string;
  @Input() titulo: string;
  @Input() mostrarModal: boolean;

  @Output() confirmou = new EventEmitter<any>();
  @Output() cancelou = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public confirmar(obj: any): void {
    this.confirmou.emit(obj);
    this.mostrarModal = false;
  }

  public cancelar(obj: any): void {
    this.cancelou.emit(obj);
    this.mostrarModal = false;
  }

}
