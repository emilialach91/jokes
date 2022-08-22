import { Component } from '@angular/core';
import { DataService, JokesData } from 'src/service/data-service';
import { JokeService } from 'src/service/jokes-service';

@Component({
	selector: 'app-my-jokes-page',
	templateUrl: './my-jokes-page.html',
	styleUrls: ['./my-jokes-page.scss']
})
export class MyJokesPage {

	category: any;
	pageState: PageState = {
		loading: false,
		ready: false,
	}

	constructor(
		public jokeService: JokeService,
		public dataService: DataService
	) {
	}

	ngOnInit() {
		this.pageState.loading = true;
		this.pageState.ready = false;
		this.jokeService.myJokesList.forEach((joke) => {
			if (this.jokeService.categoryList.find(x => x.id === joke.category)) {
				joke.category = this.jokeService.categoryList.find(x => x.id === joke.category).name
				this.jokeService.listOfTempJokes.push(joke);
			}
		});
		this.pageState.loading = false;
		this.pageState.ready = true;
	}

	async ngDoCheck() {
		if (this.jokeService.refresh === true) {
			await this.jokeService.getMyJokes();
			this.ngOnInit()
			this.jokeService.refresh = false;
		}
	}
}

export interface PageState {
	loading: boolean;
	ready: boolean;
}
