import { Component, OnInit } from '@angular/core';
import { Sesion } from '../perifericos/clases/sesion.model';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private apiservice: AuthenticationService) { }

  public nombre: string;
  public email: string;

  ngOnInit() {
  }

  login(mail,password){
  	var crypto = require('crypto');
  	var cipher = crypto.createCipher('aes256','pass');
  	var precifrada = password;
  	cipher.update(precifrada, 'utf8', 'hex');
  	var cifrada = cipher.final('hex');
  	console.log('+++++++++++++++++ CIFRADO ++++++++++++++++');
  	console.log('La pass cifrad es: '+cifrada);

  	this.apiservice.loginUsuario(mail,precifrada).subscribe( result => { //pasar cifrada cuando ande
  		var resultado = JSON.parse(result);
  		if(resultado.jwt!=null && resultado.jwt.length > 10){
  			console.log('+++++++++++++++++ TOKEN y MAIL ++++++++++++++++');
  			console.log('+++ TOKEN '+resultado.jwt+' +++');
  			console.log('+++ MAIL '+mail+' +++');
        console.log('+++ ID '+resultado.idPeriferico+' +++');
  			console.log('++++++++++++++++++++++++++++++++');
  			localStorage.setItem('mailP',mail);
        localStorage.setItem('idP',resultado.idPeriferico);
  			localStorage.setItem('session',JSON.stringify(new Sesion(resultado,null)));
  			this.router.navigate(['/listado']);
  		}
  		else {
  			this.router.navigate(['/login']);
  		}
  	},
  	error => {
  		console.log(<any> error);
  	});  

  }

}
