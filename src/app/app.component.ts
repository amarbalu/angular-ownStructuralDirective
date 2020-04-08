import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  value:boolean=false
  alert(event){
    if(!this.value){
      this.value=true
    }else{
      this.value=false
    }
      }
}
