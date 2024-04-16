import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarPerfilComponent } from './listar-perfil/listar-perfil.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarPerfilComponent,
    ListarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
