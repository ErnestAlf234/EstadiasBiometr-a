import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './principal/pages/inicio/inicio.component';
import { LivenessComponent } from './principal/pages/liveness/liveness.component';



const routes:Routes = [
  {
    path:'',
    component:InicioComponent,
    pathMatch:'full'
  },
  {
    path:'live',
    component:LivenessComponent,
  },
  //No control
  {
    path:'**',
    redirectTo:''
  }
 
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes)
  ],
  exports:[
    RouterModule
  ],
})
export class AppRouterModule { }
