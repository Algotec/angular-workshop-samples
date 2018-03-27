import {Component, NgModule} from '@angular/core';
import {
	MatCardModule, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, MatRadioModule, MatCheckboxModule
} from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
require('!style-loader!css-loader!@angular/material/prebuilt-themes/indigo-pink.css');
@Component({
	selector: 'app',
	templateUrl: 'form.html',
})
class AppComponent {
}


@NgModule({
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatButtonModule,
		MatInputModule, MatSelectModule, MatFormFieldModule, MatRadioModule, MatCheckboxModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);
