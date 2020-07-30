import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-pipe',
  templateUrl: './teste-pipe.component.html',
  styleUrls: ['./teste-pipe.component.css']
})
export class TestePipeComponent implements OnInit {

  endereco: object = {
    rua: 'Rua K',
    numero: 121,
    bairro: 'Vila J',
    cidade: 'Itu'
  };

  valorDoDolar = 5.05;
  data = new Date();
  inflacao = 0.03;
  valorDecimal = 0.55431;
  nome = 'josé da silva';

  constructor() { }

  ngOnInit() {
  }

}
