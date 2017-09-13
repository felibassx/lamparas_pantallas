import { Component } from '@angular/core';

//obtener parametros por URL
import { ActivatedRoute } from "@angular/router";

import { ProductosService } from "../../services/productos/productos.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {

  producto:any = undefined;
  cod:string = undefined;

  constructor( private route:ActivatedRoute,
                private _ps:ProductosService){

    //obtener el parametro por URL
    route.params.subscribe( parametros => {

      _ps.cargar_producto( parametros['id'] )
        .subscribe( res=> {

          this.cod = parametros['id'];
          this.producto = res.json();

        });

    });

  }

}
