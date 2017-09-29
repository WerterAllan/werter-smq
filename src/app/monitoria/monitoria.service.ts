import { SMQ_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import { DashboardMonitoria } from './dashboard-monitoria.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MonitoriaService {

  constructor(http: Http) { }

  // public listarDashboards(): Observable<DashboardMonitoria[]> {

  // }

}
