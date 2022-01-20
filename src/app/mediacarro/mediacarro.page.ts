import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mediacarro',
  templateUrl: './mediacarro.page.html',
  styleUrls: ['./mediacarro.page.scss'],
})
export class MediacarroPage implements OnInit {
  private litro;
  private km;
  private preco;
  private quilometragem: number;
  private resultado;
  constructor(private route: Router) {}
  ngOnInit(): void {}

  calcular() {
    //var litro = document.getElementById('litro');
    //var km = document.getElementById('km');
    console.log(this.litro / this.km);
    this.quilometragem = this.km / this.litro;
    this.resultado = 'Seu carro faz em média: ' + this.quilometragem + ' Km/L';
  }
  voltar() {
    console.log('voltou');
    this.route.navigate(['/home']);
  }
  ajuda() {
    this.route.navigate(['/ajuda']);
  }
}
