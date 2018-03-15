import {Component} from '@angular/core'

import {RefToContentComponent, RefToContentComponent1, ListItem} from './refToContent.component';

@Component({
	selector: 'app',
	template: `
      <h1>Ref to ContentChildren Element</h1>
      <ref-to-content>
          <li *ngFor="let item of items" #listItem> {{item}}</li>
      </ref-to-content>
      <!--<ref-to-content1>-->
          <!--<li *ngFor="let item of items"> {{item}}</li>-->
      <!--</ref-to-content1>-->
	`
})
class AppComponent {
	items = ['sugar', 'salt', 'honey']
}

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


@NgModule({
	imports: [BrowserModule, ReactiveFormsModule, HttpModule],
	declarations: [AppComponent, RefToContentComponent, RefToContentComponent1, ListItem],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
