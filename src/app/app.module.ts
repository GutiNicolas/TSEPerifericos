import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { PerifericosComponent } from './perifericos/perifericos.component';
import { VerificarComponent } from './perifericos/verificar/verificar.component';
import { ListadoComponent } from './perifericos/listado/listado.component';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';  
import { AuthenticationService } from './authentication.service';
import { ApiServiceService } from './api-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    PerifericosComponent,
    VerificarComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
              ApiServiceService,
              HttpClient,
              HttpClientModule,
              AuthenticationService,
              {
                provide: HTTP_INTERCEPTORS,
                useClass: ApiServiceService,
                multi: true
              },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
