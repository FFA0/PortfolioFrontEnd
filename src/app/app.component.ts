import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { deslizar } from './animaciones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ deslizar ]
})
export class AppComponent {
  title = 'PortFolioWeb';

  animationData(){
    return this.data.getContext("primary")?.route?.snapshot?.data?.["animation"];
  }

  constructor(private data : ChildrenOutletContexts) { }
}

