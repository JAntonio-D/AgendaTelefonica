import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Contacto } from '../models/Contacto';
import { ContactosService } from '../services/Contactos.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './Contactos.component.html'
})
export class ContactosComponent {
  formDatosContacto: FormGroup;
  public valida: boolean = false;
  public Info: Contacto;
  public mensajeError: string;
  public mensaje: string;

  constructor(private fb: FormBuilder, protected ContactoService: ContactosService) {

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


    let Info =  new Contacto();
    this.Info = Info.inicializar();

  }


  Registrar() {
    if (this.formDatosContacto.valid) {
      console.log(this.Info);
      console.log(JSON.stringify(this.Info));  
      this.ContactoService.AddContacto(JSON.stringify(this.Info)).subscribe(res => {
        console.log(res);        
      });      

      this.Info = this.Info.inicializar();

      this.mensaje = "Su contacto ha sido registrado exitosamente."
    }
    else
    {
      this.valida = true;
      this.mensajeError = "Por favor, ingrese los datos correctamente.";
    }

  }


  }


