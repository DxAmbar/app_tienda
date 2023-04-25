import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NosotrasComponent } from './components/nosotras/nosotras.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from '@auth0/auth0-angular';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FormularioTarjetaComponent } from './components/carrito/formulario-tarjeta/formulario-tarjeta.component';
import { FormularioEnvioComponent } from './components/carrito/formulario-envio/formulario-envio.component';
import { FormularioComponent } from './components/lista-productos/formulario/formulario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RelojComponent } from './components/reloj/reloj.component';
import { TruncateStringPicturePipe } from './pipes/truncate-string-picture.pipe';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es-CL';
import { ProfileComponent } from './components/profile/profile.component';
import { PdfComponent } from './components/pdf/pdf.component';

registerLocaleData(localeES,'es-CL');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NosotrasComponent,
    HomeComponent,
    FooterComponent,
    ListaProductosComponent,
    CarritoComponent,
    FormularioTarjetaComponent,
    FormularioEnvioComponent,
    FormularioComponent,
    RelojComponent,
    TruncateStringPicturePipe,
    ProfileComponent,
    PdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-h5nqf44vg6znt7wf.us.auth0.com',
      clientId: 'sH6FwfKTlvkDKnLDremDEJPYZ7qYMEMs',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ],
  providers: [
    {
       provide: LOCALE_ID, useValue: 'es-CL'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }