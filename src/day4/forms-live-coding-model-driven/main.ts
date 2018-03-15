import {Component, NgModule} from '@angular/core';
import {
	MatCardModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatFormFieldModule, MatCheckboxModule
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {ModelFormComponent} from './model-form';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
require('!style-loader!css-loader!@angular/material/prebuilt-themes/indigo-pink.css');
@Component({
	selector: 'app',
	template: '<model-form-edit></model-form-edit>',
})
class AppComponent {
}


@NgModule({
	imports: [BrowserModule, ReactiveFormsModule,
		BrowserAnimationsModule, MatCardModule, MatButtonModule,
		MatInputModule, MatSelectModule, MatFormFieldModule, MatRadioModule, MatCheckboxModule],
	declarations: [AppComponent, ModelFormComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
