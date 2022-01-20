import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'comb-preco',
    loadChildren: () => import('./comb-preco/comb-preco.module').then( m => m.CombPrecoPageModule)
  },
  {
    path: 'comb-distancia',
    loadChildren: () => import('./comb-distancia/comb-distancia.module').then( m => m.CombDistanciaPageModule)
  },
  {
    path: 'alcoolxgasol',
    loadChildren: () => import('./alcoolxgasol/alcoolxgasol.module').then( m => m.AlcoolxgasolPageModule)
  },
  {
    path: 'mediacarro',
    loadChildren: () => import('./mediacarro/mediacarro.module').then( m => m.MediacarroPageModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./ajuda/ajuda.module').then( m => m.AjudaPageModule)
  },
  {
    path: 'descricao',
    loadChildren: () => import('./descricao/descricao.module').then( m => m.DescricaoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
