import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/service/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent {
  cantidad: number;
  cantidadIncorrecta: boolean ;

  constructor(private _presupuestoService: PresupuestoService, private router: Router) {    
    this.cantidad = 0;
    this.cantidadIncorrecta = false;
  } 

  agregar() {
    if(this.cantidad > 0){
      this.cantidadIncorrecta = false;
      /* Almacenando en el servicio la cantidad del presupuesto */
      this._presupuestoService.presupuesto = this.cantidad;
      this._presupuestoService.restante = this.cantidad;
      /* Redireccionando a la pagina de gastos */
      this.router.navigate(['/gastos']);
    }else{
      this.cantidadIncorrecta = true;
    }
  }
}
