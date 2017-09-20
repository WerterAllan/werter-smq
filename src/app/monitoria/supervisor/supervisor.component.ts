import { Supervisor } from './supervisor.model';
import { Component, OnInit } from '@angular/core';
import { SupervisorService } from './supervisor.service';

@Component({
  selector: 'w-supervisor',
  templateUrl: './supervisor.component.html',
  styles: []
})
export class SupervisorComponent implements OnInit {

  //supervisor: Supervisor;
  supervisor: any;

  constructor(private supervisorService: SupervisorService) { }

  ngOnInit() {

    this.supervisorService.supervisoresPorId('6598f472-179c-4d44-b24d-e4c436812b74')
      .subscribe(supervisor => this.supervisor = supervisor);

  }

}
