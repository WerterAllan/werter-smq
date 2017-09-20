import { ChecklistItemComponent } from './checklist/checklist-item/checklist-item.component';
import { SupervisorComponent } from './monitoria/supervisor/supervisor.component';
import { Routes } from '@angular/router';


export const ROUTES: Routes = [

  { path: '', component: SupervisorComponent },
  { path: 'itens', component: ChecklistItemComponent },

];
