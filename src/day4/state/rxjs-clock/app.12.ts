import {Component} from '@angular/core';
import {interval} from "rxjs/observable/interval";
import {merge} from "rxjs/observable/merge";
import {map, mapTo} from "rxjs/operators";
import {Subject} from "rxjs/Subject";
import {Store} from '@ngrx/store';
import {SECOND, HOUR, IClockDemoAppState} from './reducers';

@Component({
	selector: 'app',
	template: `
      <input #inputNum type="number" value="0">
      <button (click)="click$.next(inputNum.value)">Update</button>
      <clock [time]="time | async"></clock>

      <div *ngFor="let person of people | async">
          {{person.name}} is in {{person.time}}
      </div>
	`
})
export class App {
	click$ = new Subject().pipe(map((value: string) => ({type: HOUR, payload: parseInt(value)})));
	seconds$ = interval(1000).pipe(mapTo({type: SECOND, payload: 3}));

	time;
	people;

	constructor(store: Store<IClockDemoAppState>) {
		this.time = store.select('clock');
		this.people = store.select('people');

		merge(this.click$, this.seconds$).subscribe(store.dispatch.bind(store));
	}
}