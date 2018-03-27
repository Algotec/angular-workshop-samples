import {Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';

/* BETTER OPTION: */


@Component({
	selector: 'ref-to-view-comp1',
	template: `
      <input #myInput type="text"/>
      <div> Some other content</div>
	`
})
export class RefToView1Component1 implements AfterViewInit {
	@ViewChild('myInput') input: ElementRef;

	constructor() {}

	ngAfterViewInit() {
		this.input.nativeElement.focus();
		console.log('Focus on the Input');

	}
}