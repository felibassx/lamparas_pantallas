import { Component } from '@angular/core';

//obtener parametros por URL
import { ActivatedRoute } from "@angular/router";

import { ProductosService } from "../../services/productos/productos.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  termino:string = undefined;

  constructor( private route:ActivatedRoute,
                private _ps:ProductosService ) {

    //obtener el parametro por URL
    route.params.subscribe( parametros => {

      this.termino = parametros['termino'];
      this._ps.buscar_producto(this.termino);

    });

  }

}
