import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comb-distancia',
  templateUrl: './comb-distancia.page.html',
  styleUrls: ['./comb-distancia.page.scss'],
})
export class CombDistanciaPage implements OnInit {
  private litros: number;
  private km;
  private autonomia;
  private resultado;
  constructor(private route: Router) {}

  ngOnInit() {}
  calcular() {
    //var litro = document.getElementById('litro');
    //var km = document.getElementById('km');
    console.log(this.km / this.autonomia);
    this.litros = this.km / this.autonomia;
    this.resultado =
      'Você gastará: ' + this.litros.toFixed(2) + ' litros de gasolina!';
  }
  voltar() {
    console.log('voltou');
    this.route.navigate(['/home']);
  }
  ajuda() {
    this.route.navigate(['/ajuda']);
  }
}
