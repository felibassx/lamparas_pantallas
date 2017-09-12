import { Component } from '@angular/core';

//obtener parametros por URL
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {

  constructor( private route:ActivatedRoute){

    //obtener el parametro por URL
    route.params.subscribe( parametros => {
      console.log(parametros);
      console.log(parametros['id']);
    });

  }

}
