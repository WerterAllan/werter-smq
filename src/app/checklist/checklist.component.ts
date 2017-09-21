import { Checklist } from './checklist.model';
import { ChecklistService } from './checklist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'w-checklist',
  template:
  `
    <w-checklist-item *ngIf="checkList" [itens]="checkList.itens"></w-checklist-item>
  `
})
export class ChecklistComponent implements OnInit {

  checkList: Checklist;

  constructor(private checklistService: ChecklistService) { }

  ngOnInit() {

    this.checklistService.buscarChecklist(1)
      .subscribe(checkList => this.checkList = checkList);

  }

}
