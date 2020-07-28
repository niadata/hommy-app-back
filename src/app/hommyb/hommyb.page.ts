import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hommyb',
  templateUrl: 'hommyb.page.html',
  styleUrls: ['hommyb.page.scss'],
})
export class HommybPage implements OnInit {
  dadosRepublicas = [];
  constructor() { }

  ngOnInit() {
    this.dadosRepublicas = [
      
      {
        nome:'Casa Rosa',
        endereco:'Vila da Penha,525, casa B- Penha, Rio de Janeiro',
        preco:'R$500,00/mês'
      },
      {
        nome:'Céu Azul',
        endereco:'Av. Paulista,62 - São Paulo, Sp',
        preco:'R$100,00/semana'
      },
      {
        nome:'Lual encantado',
        endereco:'Rua Gonçalves Fontes,14- Salvador, Bahia',
        preco:'R$350,00/mês'
      }
    ];

}
}

