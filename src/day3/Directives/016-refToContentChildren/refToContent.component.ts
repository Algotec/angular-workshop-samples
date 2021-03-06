// Demo: ref to ContentChildren

import {Component, Input, ElementRef, AfterViewInit, Renderer, ViewChild} from '@angular/core';
import {Directive, AfterContentInit, QueryList, ContentChildren} from '@angular/core';

@Component({
	selector: 'ref-to-content',
	template: `
      <ul>
          <ng-content></ng-content>
      </ul>
	`
})
export class RefToContentComponent implements AfterContentInit {
	@ContentChildren('listItem') items: QueryList<ElementRef>;

	ngAfterContentInit() {
		console.log('Items (via local-template-var): ', this.items.toArray());

	}
}


/* ANOTHER OPTION? */
@Directive({selector: 'li'})
export class ListItem {
	constructor(public el: ElementRef) {}
}

// component code
@Component({
	selector: 'ref-to-content1',
	template: `
      <ul>
          <ng-content></ng-content>
      </ul>`

})
export class RefToContentComponent1 implements AfterContentInit {
	@ContentChildren(ListItem) items: QueryList<ListItem>;

	ngAfterContentInit() {
		// this.items.notifyOnChanges()
		console.log('Items (using a directive): ', this.items.toArray());
	}
}
