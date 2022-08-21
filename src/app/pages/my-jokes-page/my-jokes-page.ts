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

	constructor(
		public jokeService: JokeService,
		public dataService: DataService
	) {
	}

	ngOnInit() {
		this.jokeService.myJokesList.map((joke) => {
			joke.category = this.jokeService.categoryList.find(x => x.id === joke.category).name
		})
	}
}
