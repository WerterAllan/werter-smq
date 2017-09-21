import { Cliente } from './../shared/cliente.model';
import { Operador } from './operador.model';
import { Checklist } from './../checklist/checklist.model';

export interface Monitoria {

  tipoMonitoria: string;
  checklist: Checklist;
  mes: string;
  nota: number;
  operador: Operador;
  cliente: Cliente;

}
