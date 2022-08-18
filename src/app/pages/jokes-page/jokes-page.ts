import { Component } from '@angular/core';
import { DataService } from 'src/service/data-service';
import { JokeService } from 'src/service/jokes-service';

@Component({
	selector: 'app-jokes-page',
	templateUrl: './jokes-page.html',
	styleUrls: ['./jokes-page.scss']
})
export class JokesPage {

	currentSlide: any;
	jokeIndex: number = 0;
	category: string = '';

	constructor(
		public dataService: DataService,
		public jokeService: JokeService
	) { }

	async ngOnInit() {
		let response: any;
		let category: any;

		try {
			response = await this.dataService.getJokesData();
		} catch (err) {
			console.error(err)
		}

		try {
			category = await this.dataService.getCategories();
		} catch (err) {
			console.error(err)
		}

		if (response && response.length > 0) {
			this.jokeService.jokeList = response;
			this.currentSlide = this.jokeService.jokeList[0];
		}

		if (response && response.length > 0) {
			this.jokeService.categoryList = category
		}

		this.category = this.jokeService.categoryList.find(x => x.id === this.currentSlide.category).name
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
