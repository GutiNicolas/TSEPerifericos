import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { Hechos } from '../clases/hechos';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
	//public hechos: Observable<Array<any>>;
	public hechos: Array<any>;//PARA TESTING
  public hechox: Array<any>;
	public nombre: string;
  constructor(private router: Router, private apiservice: ApiServiceService) {
  	
   }

  ngOnInit() {
  	//this.hechos = this.apiservice.getHechosForPeriferico();
  	this.nombre= localStorage.getItem('mailP');
  /*	this.hechos =
  	[
  		{
  			titulo: 'hecho uno',
  			id: 1
  		},
  		{
  			titulo: 'hecho dos',
  			id: 2
  		},
  		{
  			titulo: 'hecho tres',
  			id: 3
  		}
  	] */
   /* this.hechos = */this.apiservice.getHechosForPeriferico().subscribe(res=> {
     console.log('+++++++++++++++++ HECHOS +++++++++++++++');
     console.log(res);
     this.hechos=res
   });
  }

  verificar(id: string, titulo: string, url: string) {
  	localStorage.setItem('idhecho',id);
    localStorage.setItem('thecho', titulo);
    localStorage.setItem('uhecho', url);
  	this.router.navigate(['/verificar']);
  }

}
