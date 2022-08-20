
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService, JokesDataResponse } from 'src/service/data-service';

@Component({
	selector: 'app-header',
	templateUrl: './header.html',
	styleUrls: ['./header.scss']
})
export class HeaderComponent {
	allJokesView: boolean = true;
	myJokesView: boolean = false;

	constructor(
		public dataService: DataService,
		public httpClient: HttpClient
	) {
	}

	allJokesViewToggle() {
		this.allJokesView = true;
		this.myJokesView = false;
	}

	myJokesViewToggle() {
		this.allJokesView = false;
		this.myJokesView = true;
	}
}
