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

		await this.getMyJokes();

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

	async getMyJokes() {
		let myJokesResp: any;

		try {
			myJokesResp = await this.dataService.getMyJokesData();
		} catch (err) {
			console.error(err)
		}

		if (myJokesResp) {
			this.jokeService.myJokesData = myJokesResp;
			Object.keys(myJokesResp).map((objectKey) => {

				if (!this.jokeService.myJokesList.find(x => x.id === myJokesResp[objectKey].id)) {
					this.jokeService.myJokesList.push(myJokesResp[objectKey])
				}
				if (!this.jokeService.jokeList.find(x => x.id === myJokesResp[objectKey].id)) {
					this.jokeService.jokeList.push(myJokesResp[objectKey])
				}
			})
		}
	}
}
