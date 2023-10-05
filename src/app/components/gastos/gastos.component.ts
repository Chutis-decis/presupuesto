import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PresupuestoService } from 'src/app/service/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {
  constructor(private _presupuestoService: PresupuestoService, private router: Router) { }

  ngOnInit(): void {
    //Servira para cuando quieramos redireccionar la pagina de inicio
    if(this._presupuestoService.presupuesto === 0){
      this.router.navigate(['/ingresarPresupuesto']);
    }
    console.log(this._presupuestoService.presupuesto);
  }
}
