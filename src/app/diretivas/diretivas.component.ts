import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  public lembretes: Array<string> = [];
  public lembrete: string;

  public variavelSombra = '3px 2px 5px 5px yellow';

  constructor() { }

  ngOnInit() {
  }
  salvar() {
    this.lembretes = [this.lembrete, ...this.lembretes];
    this.lembrete = '';
  }
}
