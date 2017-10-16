import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaComponent } from './geral/pesquisa.component';
import { PesquisaRoutingModule } from './pesquisa-routing.module';
import { PesquisaService } from './shared/pesquisa.service';

import { PesquisadoresComponent } from './pesquisadores/pesquisadores.component';
import { PesquisadorComponent } from './pesquisadores/pesquisador/pesquisador.component';
import { GrupoComponent } from './grupos/grupo/grupo.component';
import { GruposComponent } from './grupos/grupos.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetoComponent } from './projetos/projeto/projeto.component';
import { BuscaComponent } from './shared/busca/busca.component';
import { FiltrosComponent } from './shared/filtros/filtros.component';
import { PesquisaRootComponent } from './pesquisa-root.component';

@NgModule({
  declarations: [
    PesquisaComponent,
    PesquisadoresComponent,
    PesquisadorComponent,
    GruposComponent,
    GrupoComponent,
    ProjetosComponent,
    ProjetoComponent,
    BuscaComponent,
    FiltrosComponent,
    PesquisaRootComponent
  ],
  imports: [
    CommonModule,
    PesquisaRoutingModule
  ],
  exports: [
    PesquisaComponent
  ],
  providers: [PesquisaService]
})
export class PesquisaModule { }
