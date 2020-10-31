import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../models/Contacto';
import { ContactosService } from '../services/Contactos.service';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './ListaContactos.component.html'
})
export class ListaContactosComponent {
  public lContactos: Observable<Contacto[]>;
  public response: Observable<Response>;
  formDatosContacto: FormGroup;
  public valida: boolean = false;
  public Info: Contacto;
  public popActivo = false;


  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string, private fb: FormBuilder, protected ContactoService: ContactosService) {
    this.getContactos();

    this.formDatosContacto = this.fb.group({

      nombre: ['', Validators.compose(
        [Validators.required,
        Validators.pattern(/[a-zA-Z????????????\s]/)
        ]
      )],
      apellido: ['', Validators.compose(
        [
          Validators.pattern(/[a-zA-Z????????????\s]/)
        ]
      )],
      telefono: ['', Validators.compose(
        [
          Validators.pattern(/^\d*$/)
        ]
      )],
      movil: ['', Validators.compose(
        [Validators.required,
        Validators.pattern(/^\d*$/)
        ]
      )],
      Email: ['', Validators.compose(
        [
          Validators.pattern(/^[!#$%&'*+-=?^_`{|}~a-z0-9-]+(\.[!#$%&'*+-=?^_`{|}~a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)
        ]
      )],
      direccion: ['', Validators.compose(
        [
          Validators.pattern(/[a-z0-9A-Z????????????\s]/)
        ]
      )],
    });

    let Info = new Contacto();
    this.Info = Info.inicializar();

  }




  public getContactos() {
    this.lContactos = this.ContactoService.GetContactos();
  }

  public Edit(contacto: Contacto) {
    
    this.Info = {
      nombre: contacto.nombre,
      apellido: contacto.apellido,
      telefono: contacto.telefono,
      movil: contacto.movil,
      direccion: contacto.direccion,
      email: contacto.email,
      id: contacto.id,
      inicializar : this.Info.inicializar
    }

    this.popActivo = true;
    console.log("pop");
  }

  public RegistrarEdit() {
    this.ContactoService.EditContacto(JSON.stringify(this.Info)).subscribe(res => {      
      console.log(res);
      this.popActivo = false;
      this.getContactos();
    });


  }

  public Delete(contacto: Contacto) {
    this.ContactoService.DeleteContacto(contacto.id).subscribe(res => {
      console.log(res);      
      this.getContactos();
    });
  }


}

