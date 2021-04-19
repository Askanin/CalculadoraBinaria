import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TecladoComponent } from './teclado/teclado.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HistoricoComponent } from './historico/historico.component';
import { StudyListComponent } from './study-list/study-list.component';
import { StudyCardComponent } from './study-card/study-card.component';



@NgModule({
  declarations: [
    AppComponent,
    TecladoComponent,
    HistoricoComponent,
    StudyListComponent,
    StudyCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
