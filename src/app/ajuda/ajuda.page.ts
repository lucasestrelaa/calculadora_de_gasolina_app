import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.page.html',
  styleUrls: ['./ajuda.page.scss'],
})
export class AjudaPage implements OnInit {
  private litro;
  private km;
  private preco;
  private resultado;
  constructor(private route: Router) {}
  ngOnInit(): void {}

  calcular() {
    //var litro = document.getElementById('litro');
    //var km = document.getElementById('km');
    console.log((this.litro / this.km) * this.preco);

    this.resultado = 'Você gastará: ' + (this.litro / this.km) * this.preco;
  }
  voltar() {
    console.log('voltou');
    this.route.navigate(['/home']);
  }
}
