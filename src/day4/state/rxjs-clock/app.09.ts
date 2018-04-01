import {Component} from '@angular/core';
import {interval} from "rxjs/observable/interval";
import {merge} from "rxjs/observable/merge";
import {Subject} from "rxjs/Subject";
import {Store} from '@ngrx/store';
import {mapTo} from "rxjs/operators";
import {IClockDemoAppState} from "./reducers";

import {SECOND, HOUR} from './reducers';

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

	constructor(store: Store<IClockDemoAppState>) {
		this.clock = store.select('clock');


		merge(
			this.click$.pipe(mapTo({type: HOUR, payload: 3})),
			interval(2000).pipe(mapTo({type: SECOND, payload: 4}))
		).subscribe((action) => {
			store.dispatch(action)
		})
	}
}