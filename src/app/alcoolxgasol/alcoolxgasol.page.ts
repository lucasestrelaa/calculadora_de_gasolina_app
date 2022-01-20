import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alcoolxgasol',
  templateUrl: './alcoolxgasol.page.html',
  styleUrls: ['./alcoolxgasol.page.scss'],
})
export class AlcoolxgasolPage implements OnInit {
  private alcool;
  private gasolina;
  private preco: number;
  private resultado;
  constructor(private route: Router) {}
  ngOnInit(): void {}

  calcular() {
    //var litro = document.getElementById('litro');
    //var km = document.getElementById('km');
    //console.log((this.litro / this.km) * this.preco);
    this.preco = this.alcool / this.gasolina;
    if (this.preco < 0.7) {
      this.resultado =
        'Compensa mais álcool! - (' + this.preco.toFixed(2) + ' %)';
    } else {
      this.resultado =
        'Compensa mais gasolina! - (' + this.preco.toFixed(2) + ' %)';
    }

    //this.resultado = 'Você gastará: ' + (this.litro / this.km) * this.preco;
  }
  voltar() {
    console.log('voltou');
    this.route.navigate(['/home']);
  }
  ajuda() {
    this.route.navigate(['/ajuda']);
  }
}
