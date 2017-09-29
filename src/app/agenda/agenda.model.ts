import { Prova } from './prova.model';
import { Supervisor } from './../monitoria/supervisor/supervisor.model';
import { Checklist } from './../checklist/checklist.model';

export interface Agenda {
  nome: string;
  checklist: Checklist;
  supervisores: Supervisor[];
  prova: Prova;
}
