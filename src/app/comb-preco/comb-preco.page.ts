import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-comb-preco',
  templateUrl: './comb-preco.page.html',
  styleUrls: ['./comb-preco.page.scss'],
})
export class CombPrecoPage implements OnInit {
  private distancia;
  private autonomia;
  private valor;
  private preco: number;
  private resultado;
  constructor(private route: Router) {}
  ngOnInit(): void {}

  calcular() {
    //var litro = document.getElementById('litro');
    //var km = document.getElementById('km');
    //console.log(this.valor / this.distancia);
    this.preco = (this.valor * this.distancia) / this.autonomia;
    this.resultado = 'A sua conta será de R$: ' + this.preco.toFixed(2) + ' !';
  }
  voltar() {
    console.log('voltou');
    this.route.navigate(['/home']);
  }
  ajuda() {
    this.route.navigate(['/ajuda']);
  }
}
