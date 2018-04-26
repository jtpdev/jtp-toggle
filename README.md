# JtpToggle

A simple multitoggle for Angular.


## Install

To install this, use:

> npm install --save jtp-toggle

## Use

To use in your project import it in your module like that:

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';


    import { AppComponent } from './app.component';
    import { ToggleModule } from 'jtp-togglw';


    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        ToggleModule
      ],
      providers: [
        LevenshteinService
      ],
      bootstrap: [AppComponent]
    })
    export class AppModule { }


and use in your component:

    <jtp-toggle [options]="options" [set]="model" (get)="model = $event"></jtp-toggle>

and

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
And done!

## P.S.

The **jtp-toggle** uses [ionicons](http://ionicons.com/).
