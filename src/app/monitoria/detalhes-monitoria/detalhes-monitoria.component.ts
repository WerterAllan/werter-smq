import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'w-detalhes-monitoria',
  templateUrl: './detalhes-monitoria.component.html',
  styles: []
})
export class DetalhesMonitoriaComponent implements OnInit {

  tipoMonitoria = 'Cobrança';
  mes = 'Setembro';

  constructor() { }

  ngOnInit() {
  }

}
