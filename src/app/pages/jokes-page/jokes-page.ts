import { Component } from '@angular/core';
import { DataService } from 'src/service/data-service';
import { JokeService } from 'src/service/jokes-service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
	selector: 'app-jokes-page',
	templateUrl: './jokes-page.html',
	styleUrls: ['./jokes-page.scss']
})
export class JokesPage {

	currentSlide: any;
	jokeIndex: number = 0;
	category: string = '';

	pageState: PageState = {
		loading: true,
		ready: false,
	}

	constructor(
		public dataService: DataService,
		public jokeService: JokeService
	) { }

	async ngOnInit() {
		let allJokeResp: any;
		let categoryResp: any;

		try {
			allJokeResp = await this.dataService.getJokesData();
		} catch (err) {
			console.error(err)
		}


		try {
			categoryResp = await this.dataService.getCategories();
		} catch (err) {
			console.error(err)
		}


		if (allJokeResp && allJokeResp.length > 0) {
			this.jokeService.jokeList = allJokeResp;
			this.currentSlide = this.jokeService.jokeList[0];
		}

		if (allJokeResp && allJokeResp.length > 0) {
			this.jokeService.categoryList = categoryResp
		}

		await this.jokeService.getMyJokes();

		this.category = this.jokeService.categoryList.find(x => x.id === this.currentSlide.category).name
		this.pageState.loading = false;
		this.pageState.ready = true;
	}

	nextJoke() {
		this.jokeIndex = this.jokeIndex + 1;
		this.currentSlide = this.jokeService.jokeList[this.jokeIndex];
		this.checkCategory(this.currentSlide)

	}

	prevJoke() {
		this.jokeIndex = this.jokeIndex - 1;
		this.currentSlide = this.jokeService.jokeList[this.jokeIndex];
		this.checkCategory(this.currentSlide)
	};

	checkCategory(currentJoke: any) {
		this.category = this.jokeService.categoryList.find(x => x.id === currentJoke.category).name
	}
}

export interface PageState {
	loading: boolean;
	ready: boolean;
}
