import { ChecklistItem } from './checklist-item/checklist-item.model';
export class Checklist {

  constructor(public nome: string, public itens: ChecklistItem[] = []) { }
}
