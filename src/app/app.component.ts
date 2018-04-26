import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  options = [
    {
      icon: 'ion-ios-camera-outline',
      color: '#858585',
      value: 0
    },
    {
      icon: 'ion-ios-camera-outline',
      color: '#00FF00',
      value: 1
    },
    {
      icon: 'ion-ios-camera',
      color: '#FF0000',
      value: 2
    },
  ];

  model = 1;

}
