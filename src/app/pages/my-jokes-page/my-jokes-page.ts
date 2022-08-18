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
	jokeKey: any;

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
			this.jokeKey = response;
			Object.keys(response).map((objectKey) => {
				this.myJokes.push(response[objectKey])
			});
		}
	}


	async deleteJoke(id: string) {
		console.log('all', this.jokeKey)
		const newArrayDataOfOjbect = Object.values(this.jokeKey)
		// const selectedJoke: string = this.jokeKey.find(x => x.id === id);
		// const prop: string = "-N9mbCWKJcHoTN_zE-6S"

		// const test: any = delete this.jokeKey[prop]

		console.log(newArrayDataOfOjbect)
		console.log(this.jokeKey)
		// console.log('1', selectedJoke)
		// await this.dataService.deleteMyJoke(selectedJoke);
	}

	async addNewJoke() {
		const params: any = {
			id: 'hfffdfghfgjdghj',
			category: 'o jasiu',
			content: "prosze niech to dziala"
		}
		let resp: any;

		resp = await this.dataService.sendMyJokesData(params);

	}

}
