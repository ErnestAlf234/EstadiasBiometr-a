import { Component } from '@angular/core';


@Component({
  selector: 'app-liveness',
  templateUrl: './liveness.component.html',
  styleUrls: ['./liveness.component.css']
})
export class LivenessComponent {
  file:any;
  getFile(event:any){
    this.file = event.target.files[0];
    console.log("file",this.file);

  }
  uploadFile(){
    let formData = new FormData();
    formData.set("file", this.file);
  }
  
}
