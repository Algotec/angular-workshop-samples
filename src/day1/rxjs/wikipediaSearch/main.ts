import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
// //this
// import {WikipediaService} from './wikipedia-service';
// import {App} from './app';

//or this

import {App} from './app1';
import {WikipediaService} from './wikipedia-servico'


@NgModule({
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientJsonpModule, HttpClientModule],
	declarations: [App],
	bootstrap: [App],
	providers: [WikipediaService]
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
