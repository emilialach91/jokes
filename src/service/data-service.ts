import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()

export class DataService {

	constructor(
		public httpClient: HttpClient

	) {
	}

	getJokesData() {
		return new Promise((resolve, reject) => {
			this.httpClient.get('https://jokes-c4aea-default-rtdb.firebaseio.com/jokes.json')
				.subscribe(
					data => {
						resolve(data);
					},
					async err => {
						console.log('error', err)
						reject(err);
					}
				);
		});
	}

	getCategories() {
		return new Promise((resolve, reject) => {
			this.httpClient.get('https://jokes-c4aea-default-rtdb.firebaseio.com/categories.json')
				.subscribe(
					data => {
						resolve(data);
					},
					async err => {
						console.log('error', err)
						reject(err);
					}
				);
		});
	}

	getMyJokesData() {
		return new Promise((resolve, reject) => {
			this.httpClient.get('https://jokes-c4aea-default-rtdb.firebaseio.com/my-jokes.json')
				.subscribe(
					data => {
						resolve(<JokesData>data);
					},
					async err => {
						console.log('error', err)
						reject(err);
					}
				);
		});
	}

	sendMyJokesData(params: SendJokeParams) {
		return new Promise((resolve, reject) => {
			this.httpClient.post('https://jokes-c4aea-default-rtdb.firebaseio.com/my-jokes.json', params)
				.subscribe(
					data => {
						resolve(data);
					},
					async err => {
						console.log('error', err)
						reject(err);
					}
				);
		});
	}

	deleteMyJoke(params: any) {
		return new Promise((resolve, reject) => {
			this.httpClient.delete('https://jokes-c4aea-default-rtdb.firebaseio.com/my-jokes/' + params + '.json')
				.subscribe(
					data => {
						resolve(data);
					},
					async err => {
						console.log('error', err)
						reject(err);
					}
				);
		});
	}
}
export interface JokesData {
	id: string;
	category: string;
	content: string;
}

export interface CategoriesData {
	code: string;
	id: string;
	name: string;
}

export interface SendJokeParams {
	id: string;
	category: string;
	content: string
}



