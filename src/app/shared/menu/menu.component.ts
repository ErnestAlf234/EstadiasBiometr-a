import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  
  items: MenuItem[]=[];
  
  ngOnInit(): void {
    this.items= [
     {
      label:'Biometría',
      icon:'pi pi-code',
      items:[
        {
          label:'Pantalla de inicio',
          icon: 'pi pi-desktop',
          routerLink:'/'
        },
        
      ]
     },
     {
      label:'Pipes personalizados',
      icon:'pi pi-cog'
     }
  ];
  }

}
