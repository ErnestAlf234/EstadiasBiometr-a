import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { LivenessComponent } from './pages/liveness/liveness.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    InicioComponent,
    LivenessComponent
  ],
  exports:[
    InicioComponent,
    LivenessComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    SharedModule

  ]
})
export class PrincipalModule { }
