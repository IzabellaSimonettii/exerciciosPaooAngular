import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public valor;
  public nome: string;
  public fone: number;
  public email: string;
  public profissao: string;
  // public pessoa: Pessoa = new Pessoa();

profissoes = ['Engenheiro', 'Professor', 'Químico', 'Zoólogo'];

constructor() { }

ngOnInit() {}

gerarDeId() {
  this.valor = Math.round(Math.random() * 100) + 1;
}

salvar(pessoaForm) {
  this.nome = pessoaForm.value.nome;
  this.fone = pessoaForm.value.fone;
  this.email = pessoaForm.value.email;
  this.profissao = pessoaForm.value.profissao;
  console.log(`Nome: ${this.nome}, Fone: ${this.fone}, Email: ${this.email}, Profissão: ${this.profissao}`)
}




}
