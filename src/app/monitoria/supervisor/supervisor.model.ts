import { Operador } from '../operador.model';

export interface Supervisor {
  id: number;
  nome: string;
  sobreNome: string;
  operadores: Operador[];
}
