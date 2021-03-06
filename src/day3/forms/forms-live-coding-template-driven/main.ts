import {Component, NgModule} from '@angular/core';
import {MatCardModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, MatCheckboxModule} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {TemplateFormComponent} from './templateform';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

require('!!style-loader!css-loader!@angular/material/prebuilt-themes/indigo-pink.css');

@Component({
	selector: 'app',
	template: '<template-form-edit></template-form-edit>',
})
class AppComponent {
}

@NgModule({
	imports: [BrowserModule, BrowserAnimationsModule, FormsModule, MatCardModule, MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatCheckboxModule],
	declarations: [AppComponent, TemplateFormComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
