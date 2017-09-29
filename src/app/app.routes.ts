import { CriarAgendaComponent } from './agenda/criar-agenda/criar-agenda.component';
import { MonitoriaComponent } from './monitoria/monitoria.component';
import { CriarChecklistComponent } from './checklist/criar-checklist/criar-checklist.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistItemComponent } from './checklist/checklist-item/checklist-item.component';
import { SupervisorComponent } from './monitoria/supervisor/supervisor.component';
import { Routes } from '@angular/router';


export const ROUTES: Routes = [

  // { path: '', component: SupervisorComponent },
  { path: 'itens', component: ChecklistItemComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'supervisor', component: SupervisorComponent },
  { path: 'criar-checklist', component: CriarChecklistComponent },
  { path: 'monitorias', component: MonitoriaComponent },
  { path: 'criar-agenda', component: CriarAgendaComponent }

];
