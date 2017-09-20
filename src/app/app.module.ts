import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SupervisorComponent } from './monitoria/supervisor/supervisor.component';
import { SupervisorService } from './monitoria/supervisor/supervisor.service';
import { MonitoriaComponent } from './monitoria/monitoria.component';
import { LoginComponent } from './login/login.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistItemComponent } from './checklist/checklist-item/checklist-item.component';
import { RadioComponent } from './shared/radio/radio.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    SupervisorComponent,
    MonitoriaComponent,
    LoginComponent,
    ChecklistComponent,
    ChecklistItemComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [SupervisorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
