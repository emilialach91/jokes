import { Component } from '@angular/core';
import { DataService } from 'src/service/data-service';

@Component({
	selector: 'app-jokes-page',
	templateUrl: './jokes-page.html',
	styleUrls: ['./jokes-page.scss']
})
export class JokesPage {

	jokes: any[] = []
	currentSlide: any;
	jokeIndex: number = 0;
	categories: any[] = [];
	category: string = '';

	constructor(
		public dataService: DataService
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

		if (response.length > 0) {
			this.jokes = response;
			this.currentSlide = this.jokes[0];
		}

		if (category.length > 0) {
			this.categories = category
		}

		this.category = this.categories.find(x => x.id === this.currentSlide.category).name
	}

	nextJoke() {
		this.jokeIndex = this.jokeIndex + 1;
		this.currentSlide = this.jokes[this.jokeIndex];
		this.checkCategory(this.currentSlide)

	}

	prevJoke() {
		this.jokeIndex = this.jokeIndex - 1;
		this.currentSlide = this.jokes[this.jokeIndex];
		this.checkCategory(this.currentSlide)
	};


	checkCategory(currentJoke: any) {
		this.category = this.categories.find(x => x.id === currentJoke.category).name
	}
}
