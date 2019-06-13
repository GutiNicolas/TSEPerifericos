import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { Hechos } from '../clases/hechos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.component.html',
  styleUrls: ['./verificar.component.css']
})
export class VerificarComponent implements OnInit {

	idh: string;
  t: string;
  u: string;
  constructor(private router: Router, private apiservice: ApiServiceService) { }

  ngOnInit() {
  	this.idh= localStorage.getItem('idhecho');
    this.t= localStorage.getItem('thecho');
    this.u= localStorage.getItem('uhecho');
  }

  enviar(calificacion: string){
  		if(this.idh!=null && calificacion!='None'){
        console.log('RESULTADO SELECCIONADO: '+calificacion);
  			this.apiservice.retornarCalificacion(calificacion).subscribe( result => { 
  				var resultado = JSON.parse(result);
  				//HACER ALGO SI SE TIENE QUE HACER

  			},
  			error => {
  				console.log(<any> error);
  			});  
  		}
  }

  volver(){
  	this.router.navigate(['/listado']);
  }

}
