import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()

export class DataService {

	public jokes: any = [];
	public categories: any;
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
}

export interface JokesDataResponse {
	id: string;
	category: string;
	content: string;
}

export interface CategoriesDataResponse {
	code: string;
	id: string;
	name: string;
}



