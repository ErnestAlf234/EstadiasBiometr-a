import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
// Componentes personalizados
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent
  ],
  exports:[
    MenuComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
