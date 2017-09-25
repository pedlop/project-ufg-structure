import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PesquisaRoutingModule } from './pesquisa-routing.module';
import { PesquisaService } from './shared/pesquisa.service';

import { ToastModule } from '../../../portal';

@NgModule({
  declarations: [PesquisaComponent],
  imports: [
    CommonModule,
    PesquisaRoutingModule,
    ToastModule.forRoot()
  ],
  exports: [PesquisaComponent],
  providers: [PesquisaService]
})
export class PesquisaModule { }
