import { Component } from '@angular/core';
import { DataService } from 'src/service/data-service';
import { JokeService } from 'src/service/jokes-service';

@Component({
	selector: 'app-my-jokes-page',
	templateUrl: './my-jokes-page.html',
	styleUrls: ['./my-jokes-page.scss']
})
export class MyJokesPage {

	constructor(
		public jokeService: JokeService,
		public dataService: DataService
	) {
	}


	async ngOnInit() {
		let response: any;

		try {
			response = await this.dataService.getMyJokesData();
		} catch (err) {
			console.error(err)
		}

		if (response || response.length > 0) {
			console.log('1')
		} else {
			console.log('2')
		}


		// this.category = this.jokeService.categoryList.find(x => x.id === this.currentSlide.category).name
	}

	async addNewJoke() {
		const params: any = {
			id: 'hdjhfd',
			category: 'o jasiu',
			content: "prosze niech to dziala"
		}
		let resp: any;

		resp = await this.dataService.sendMyJokesData(params);

		console.log(resp)

	}

}
