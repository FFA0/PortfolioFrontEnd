import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slide } from './animaciones';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slide ]
})
export class AppComponent {
  title = 'PortFolioWeb';

  animationData(){
    return this.data.getContext("primary")?.route?.snapshot?.data?.["animation"];
  }

  constructor(private data : ChildrenOutletContexts) { }
}

