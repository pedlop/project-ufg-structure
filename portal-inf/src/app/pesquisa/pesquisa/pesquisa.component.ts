import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../../../portal';

@Component({
  selector: 'inf-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  constructor(private testToast: ToastService) { }

  ngOnInit() {
    this.testToast.sucesso('Funciona', 'Doido');
  }

}
