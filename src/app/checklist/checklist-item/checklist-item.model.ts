export interface ChecklistItem {

  posicao: number;
  descricao: string;
  descricaoAbreviada: string;
  peso: number;
  eEliminatoria: boolean;
  atendeuItem?: string;
  comentario?: string;
}
