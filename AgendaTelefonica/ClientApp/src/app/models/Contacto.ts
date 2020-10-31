export class Contacto {
  id: number = -1;
  nombre: string;
  apellido: string;
  telefono: number;
  movil: number;
  email: string;
  direccion: string;
 

  constructor(id:number = 0,nombre: string = "", apellido: string = "", telefono: number = 0 , movil: number = 0, email: string = "", direccion: string = "") {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.movil = movil;
    this.email = email;
    this.direccion = direccion;    
  }
  public inicializar(): Contacto {
    return new Contacto(0,"","",0,0,"","");
  }
}

export interface Response {
  Success: number,
  Data: any,
  Message: string
}
