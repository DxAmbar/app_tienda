import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrasComponent } from './components/nosotras/nosotras.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { FormularioEnvioComponent } from './components/carrito/formulario-envio/formulario-envio.component';

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
    path: "envio" , component: FormularioEnvioComponent,
  },
  {
    path: "envio" , component: FormularioEnvioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
