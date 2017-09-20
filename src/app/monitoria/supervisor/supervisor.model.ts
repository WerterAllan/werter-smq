import { Operador } from '../operador.model';

export interface Supervisor {
  id: string;
  nome: string;
  sobreNome: string;
  operadores: Operador[];
}
