
// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// outros modulos
import { CurrencyMaskModule } from 'ng2-currency-mask';

// services
import { ChecklistService } from './checklist/checklist.service';
import { SupervisorService } from './monitoria/supervisor/supervisor.service';
import { DetalhesGravacaoService } from './monitoria/detalhes-gravacao/detalhes-gravacao.service';

// components
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SupervisorComponent } from './monitoria/supervisor/supervisor.component';
import { MonitoriaComponent } from './monitoria/monitoria.component';
import { LoginComponent } from './login/login.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ChecklistItemComponent } from './checklist/checklist-item/checklist-item.component';
import { RadioComponent } from './shared/radio/radio.component';



// rotas
import { ROUTES } from './app.routes';
import { DetalhesGravacaoComponent } from './monitoria/detalhes-gravacao/detalhes-gravacao.component';
import { DetalhesMonitoriaComponent } from './monitoria/detalhes-monitoria/detalhes-monitoria.component';
import { CriarChecklistComponent } from './checklist/criar-checklist/criar-checklist.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from './shared/input/input.component';


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
    RadioComponent,
    DetalhesGravacaoComponent,
    DetalhesMonitoriaComponent,
    CriarChecklistComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [SupervisorService, ChecklistService, DetalhesGravacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
