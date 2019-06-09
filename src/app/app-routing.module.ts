import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { PerifericosComponent } from './perifericos/perifericos.component';
import { ListadoComponent } from './perifericos/listado/listado.component';
import { VerificarComponent } from './perifericos/verificar/verificar.component';




const routes: Routes = [

	{path: '', component:InicioComponent},
	{path: 'login', component:LoginComponent},
	{path: 'inicio', component:PerifericosComponent},
	{path: 'listado', component:ListadoComponent},
	{path: 'verificar', component:VerificarComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
