import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private route: Router) {}
  dist() {
    this.route.navigate(['/comb-distancia']);
  }
  preco() {
    this.route.navigate(['/comb-preco']);
  }
  axg() {
    this.route.navigate(['/alcoolxgasol']);
  }
  media() {
    this.route.navigate(['/mediacarro']);
  }
  ajuda() {
    this.route.navigate(['/ajuda']);
  }
}
