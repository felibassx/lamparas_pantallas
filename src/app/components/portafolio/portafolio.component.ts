import { Component } from '@angular/core';
import { ProductosService } from "../../services/productos/productos.service";

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: []
})
export class PortafolioComponent {

  constructor( public _ps:ProductosService){

  }

}
