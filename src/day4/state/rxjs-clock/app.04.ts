import {Component} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {interval} from "rxjs/observable/interval";
import {map} from "rxjs/operators";
import {merge} from "rxjs/observable/merge";

@Component({
	selector: 'app',
	template: `
      <button (click)="click$.next()">Update</button>
      <h1>{{clock | async | date:'y MMMM EEEE hh:mm:ss'}}</h1>
	`
})
export class App {
	click$ = new Subject();

	clock;

	constructor() {
		this.clock = merge(
			this.click$,
			interval(2000)
		).pipe(map(() => new Date()));
	}
}