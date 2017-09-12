import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {

  info:any = {};
  cargada:boolean = false;//bandera, información cargada
  cargada_sobre_nosotros:boolean = false;//bandera, información cargada
  cargada_contenido_dos:boolean = false;//bandera, información cargada
  cargada_contenido_tres:boolean = false;//bandera, información cargada
  equipo:any[] = [];
  cont_dos:any[] = [];
  cont_tres:any[] = [];

  constructor( public http:Http ) {
    this.carga_info();
    this.carga_sobre_nosotros();
    this.carga_contenido_dos();
    this.carga_contenido_tres();
  }

//carga la información de la página.
  public carga_info(){
    this.http.get("assets/data/info.pagina.json")
      .subscribe(
        data => {
            //console.log(data.json());
            this.cargada = true;
            this.info = data.json();

        });
  }

//cargo la información sobre nosotros desde firebase
  public carga_sobre_nosotros(){
    this.http.get("https://lamparasypantallasweb.firebaseio.com/equipo.json")
      .subscribe(
        data => {
            //console.log(data.json());
            this.cargada_sobre_nosotros = true;
            this.equipo = data.json();

        });
  }

  public carga_contenido_dos(){
    this.http.get("https://lamparasypantallasweb.firebaseio.com/contenido_dos.json")
      .subscribe(
        data => {
            //console.log(data.json());
            this.cargada_contenido_dos = true;
            this.cont_dos = data.json();

        });
  }

  public carga_contenido_tres(){
    this.http.get("https://lamparasypantallasweb.firebaseio.com/contenido_simple.json")
      .subscribe(
        data => {
            //console.log(data.json());
            this.cargada_contenido_tres = true;
            this.cont_tres = data.json();

        });
  }

}
