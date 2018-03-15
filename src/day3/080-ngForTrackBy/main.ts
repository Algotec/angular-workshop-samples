import {Component} from '@angular/core'

import {TrackbyComponent} from './trackby.component';
import {NodeLoggerDirective} from './node-logger.directive';

@Component({
    selector: 'app',
    template: `
        <h1>Understanding ngForTrackBy</h1>
        <trackby-comp></trackby-comp>
    `,
})
class AppComponent {}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [ BrowserModule ],      
  declarations: [ AppComponent, TrackbyComponent ,NodeLoggerDirective],
  bootstrap: [ AppComponent ],     
  providers: [ ]                   
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
