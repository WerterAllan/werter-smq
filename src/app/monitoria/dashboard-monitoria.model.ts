import { MonitoriaCard } from './card-monitoria/monitoria-card.model';

export interface DashboardMonitoria {
  tipoMonitoria: string;
  cards: MonitoriaCard[];
}
