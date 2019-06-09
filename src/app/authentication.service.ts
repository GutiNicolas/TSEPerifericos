import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sesion } from './perifericos/clases/sesion.model';

const httpOptions: {
  headers?: HttpHeaders,
  observe?: 'body',
  params?: HttpParams,
  reportProgress?: boolean,
  responseType: 'text',
  withCredentials?: boolean

} = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text'
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  api_key = '593353109d5846fa8188a9de013e4faa';
  API_URL = 'https://r179-27-99-70.ir-static.anteldata.net.uy:8443/FakeNews-web/RESTServices'

  constructor(private http: HttpClient) { }

  loginUsuario(email, password) {
    var p: any = {};
    p.password = password;
    p.username = email;
    let jsonperi = JSON.stringify(p);
    console.log(jsonperi);

    return this.http.post(`${this.API_URL}/periferico/login`, jsonperi, httpOptions);
  }

  actualizarToken(tok: string) {
    httpOptions.headers.append('Authorization', 'Bearer '+tok);
  }

}
