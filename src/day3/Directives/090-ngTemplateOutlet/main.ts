import {Component} from '@angular/core'

@Component({
	selector: 'app',
	template: `
      <!--<yesNo (decision)="log($event)"> </yesNo>-->
      <yesNo2 #handler>
          <ng-template #no> 
							<!--notice the order does not matter - the component decides on the real order-->
              <button (click)="handler.decide(false)"><span class="glyphicon glyphicon-remove"></span></button>
          </ng-template>
          <ng-template #yes>
              <button (click)="handler.decide(true)"><span class="glyphicon glyphicon-ok"></span></button>
          </ng-template>
      </yesNo2>
      <!-- [text]="{yes:'כן', no:'לא'}" -->
      <!--<ng-template let-dec let-text="text">-->
      <!--<button (click)="dec(true)"><span class="glyphicon glyphicon-ok"></span>{{text.yes}}</button>-->
      <!--<button (click)="dec(false)"><span class="glyphicon glyphicon-remove"></span>{{text.no}}</button>-->
      <!--</ng-template>-->

	`
})
class AppComponent {
	log($event) {
		console.log($event);
	}
}

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {YesnoComponent} from "./yesno-component";
import {YesnoComponent2} from "./yesno-component2";


@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, YesnoComponent, YesnoComponent2],
	bootstrap: [AppComponent],
	providers: []
})
export class AppModule {

}

platformBrowserDynamic().bootstrapModule(AppModule);

