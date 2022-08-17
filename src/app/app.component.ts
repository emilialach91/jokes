import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface Item {
	content: string
};

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	constructor(
	) {
	}
}
