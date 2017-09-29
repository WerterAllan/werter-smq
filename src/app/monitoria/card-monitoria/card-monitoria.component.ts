import { MonitoriaCard } from './monitoria-card.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'w-card-monitoria',
  templateUrl: './card-monitoria.component.html',
  styles: []
})
export class CardMonitoriaComponent implements OnInit {

  @Input() card: MonitoriaCard;

  constructor() { }

  ngOnInit() {

  }

}
