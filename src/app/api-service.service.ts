import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sesion } from './perifericos/clases/sesion.model';
import { Hechos } from './perifericos/clases/hechos';


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
export class ApiServiceService {

  api_key = '593353109d5846fa8188a9de013e4faa';

  API_URL = 'https://r179-27-99-70.ir-static.anteldata.net.uy:8443/FakeNews-web/RESTServices'

  constructor(private http: HttpClient) { }

  getHechosForPeriferico(): Observable<Array<object>> {
    var idP = localStorage.getItem("idP");

    return this.http.get<Array<object>>(`${this.API_URL}/periferico/getHechosAsignadosMecanismo/` + idP);
  }

  retornarCalificacion(calificacion: string){
    var r: any = {};
    r.idHecho = localStorage.getItem('idhecho');
    r.idMecanismoVerificacion = localStorage.getItem("idP");
    r.calificacion = calificacion;
    let jsonresp = JSON.stringify(r);
    console.log(jsonresp);

    return this.http.post(`${this.API_URL}/resultadoVerificarHechoMecanismo`, jsonresp, httpOptions);
  }

  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({                                                                         
      setHeaders: {
        Authorization: `Bearer ${this.getToken()}`
      }
    });
    console.log('****&&&&& INTERCEPTED &&&&&&*****');
    return next.handle(request);
  }

  public getToken() {
    var sesion: Sesion = JSON.parse(localStorage.getItem('session'));
    console.log(sesion);
    return sesion != null ? sesion.token.jwt : null;
  }

}
