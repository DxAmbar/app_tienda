import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrasComponent } from './components/nosotras/nosotras.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { FormularioComponent } from './components/lista-productos/formulario/formulario.component';
import { FormularioEnvioComponent } from './components/carrito/formulario-envio/formulario-envio.component';
import { Page404Component } from './components/page404/page404.component';
import { RelojComponent } from './components/reloj/reloj.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'home', redirectTo: '',
  },
  {
    path: 'index', redirectTo: '',
  },
  {
    path: 'nosotras', component: NosotrasComponent,
  },
  {
    path: 'lista-productos', component: ListaProductosComponent, canActivate: [AuthGuard], 
  },
  {
    path: 'lista-productos/formulario', component: FormularioComponent,
  },
  {
    path: "envio" , component: FormularioEnvioComponent,
  },
  {
    path: "envio" , component: FormularioEnvioComponent,
  },


  {
    path: "reloj" , component: RelojComponent,
  },

  

  {
    path: '404', component: Page404Component, //Estos path de 404 siempre van al final
  },
  {
    path: '**', redirectTo: '404',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
