import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { SombraNaTabelaDirective } from './sombra-na-tabela.directive';
import { TestePipeComponent } from './teste-pipe/teste-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    DiretivasComponent,
    SombraNaTabelaDirective,
    TestePipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
