import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisaRootComponent } from './pesquisa-root.component';
import { PesquisaComponent } from './geral/pesquisa.component';
import { PesquisadoresComponent } from './pesquisadores/pesquisadores.component';
import { PesquisadorComponent } from './pesquisadores/pesquisador/pesquisador.component';
import { GruposComponent } from './grupos/grupos.component';
import { GrupoComponent } from './grupos/grupo/grupo.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetoComponent } from './projetos/projeto/projeto.component';

const routes: Routes = [
  {
    path: 'pesquisa',
    component: PesquisaRootComponent,
    children: [
      {
        path: 'geral',
        component: PesquisaComponent
      },
      {
        path: 'pesquisadores',
        component:  PesquisadoresComponent
      },
      {
        path: 'pesquisador/:id',
        component: PesquisadorComponent
      },
      {
        path: 'grupos',
        component: GruposComponent
      },
      {
        path: 'grupo/:id',
        component: GrupoComponent
      },
      {
        path: 'projetos',
        component: ProjetosComponent
      },
      {
        path: 'projeto/:id',
        component: ProjetoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesquisaRoutingModule { }
