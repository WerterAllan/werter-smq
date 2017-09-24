export interface ChecklistItem {

  id: number;
  descricao: string;
  descricaoAbreviada: string;
  peso: number;
  eEliminatoria: boolean;
  atendeuItem?: string;
  comentario?: string;
}
