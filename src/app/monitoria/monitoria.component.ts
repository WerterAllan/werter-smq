import { DashboardMonitoria } from './dashboard-monitoria.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'w-monitoria',
  templateUrl: './monitoria.component.html'
})
export class MonitoriaComponent implements OnInit {

  dashboardMonitoria: DashboardMonitoria[];
  constructor() { }


  ngOnInit() {

    this.dashboardMonitoria = [
      {
        tipoMonitoria: 'Cobrança',
        cards: [
          { tipoMonitoria: 'Portabilidade', qtdSupervisores: 5, qtdOperadores: 26, media: 30 },
          { tipoMonitoria: 'Receptivo', qtdSupervisores: 7, qtdOperadores: 35, media: 15 },
          { tipoMonitoria: 'Ativo', qtdSupervisores: 2, qtdOperadores: 11, media: 55 }
        ]
      }
    ];


  }

}
