import { Component } from '@angular/core';
import { DataService } from 'src/service/data-service';
import { JokeService } from 'src/service/jokes-service';

@Component({
	selector: 'app-my-jokes-page',
	templateUrl: './my-jokes-page.html',
	styleUrls: ['./my-jokes-page.scss']
})
export class MyJokesPage {

	myJokes: any[] = [];

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

		if (response) {
			this.jokeService.myJokesData = response;
			Object.keys(response).map((objectKey) => {
				response[objectKey].category = this.jokeService.categoryList.find(x => x.id === response[objectKey].category).name
				this.myJokes.push(response[objectKey])
			});
		}
	}
}
