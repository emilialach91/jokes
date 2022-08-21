import { Component } from '@angular/core';
import { DataService } from 'src/service/data-service';
import { JokeService } from 'src/service/jokes-service';

@Component({
	selector: 'app-my-jokes-page',
	templateUrl: './my-jokes-page.html',
	styleUrls: ['./my-jokes-page.scss']
})
export class MyJokesPage {

	category: any;
	pageState: PageState = {
		loading: true,
		ready: false,
	}

	constructor(
		public jokeService: JokeService,
		public dataService: DataService
	) {
	}

	ngOnInit() {
		this.jokeService.myJokesList.forEach((joke) => {
			joke.category = this.jokeService.categoryList.find(x => x.id === joke.category).name
		})

		this.pageState.loading = false;
		this.pageState.ready = true;
	}
}

export interface PageState {
	loading: boolean;
	ready: boolean;
}
