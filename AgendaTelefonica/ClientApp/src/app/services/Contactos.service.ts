import { Injectable, Inject } from '@angular/core';
import { Contacto } from '../models/Contacto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'auth-token'
  })
}
@Injectable({
  providedIn: 'root'
})

export class ContactosService {
  baseUrl : string
  constructor( protected http : HttpClient, @Inject('BASE_URL') baseUrl : string) {
    this.baseUrl = baseUrl;
  }

  public GetContactos(): Observable<Contacto[]>{
    
    return this.http.get<Contacto[]>(this.baseUrl + "api/Contactos/get");
    
  }

  public AddContacto(Contacto) : Observable<Response> {
    return this.http.post<Response>(this.baseUrl + "api/Contactos/add", Contacto, httpOptions);      
  }

  public EditContacto(Contacto) : Observable<Response> {
    return this.http.put<Response>(this.baseUrl + "api/Contactos/edit", Contacto, httpOptions);
  }

  public DeleteContacto(id : number) : Observable<Response> {
    return this.http.delete<Response>(this.baseUrl + "api/Contactos/delete/" + id);     
  } 





}
