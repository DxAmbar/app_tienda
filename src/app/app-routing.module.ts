import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrasComponent } from './components/nosotras/nosotras.component';
import { AuthGuard } from '@auth0/auth0-angular';

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
  // {
  //   path: 'editar productos', component: EditarProductos, canActivate: [AuthGuard],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
