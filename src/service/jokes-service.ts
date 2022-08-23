
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActionPage } from 'src/app/pages/action-page/action-page';
import { CategoriesData, DataService, JokesData } from './data-service';

@Injectable()

export class JokeService {

	categoryList: any[] = []
	jokeList: JokesData[] = [];
	myJokesList: JokesData[] = [];
	myJokesData: any;
	refresh: boolean = false;
	listOfTempJokes: JokesData[] = [];


	constructor(
		public dialog: MatDialog,
		public snackBar: MatSnackBar,
		public dataService: DataService
	) {

	}

	openDialog(joke?: JokesData) {
		let data: DialogData;
		if (joke) {
			data = {
				title: 'Potwierdzenie',
				message: 'Czy na pewno chcesz usunąć wybrany żart?',
				buttonText: {
					cancel: 'Nie',
					ok: 'Tak',
				},
				joke: joke,
			}
		} else {
			data = {
				title: 'Dodawanie żartu',
				buttonText: {
					cancel: 'Anuluj',
					ok: 'Dodaj',
				}
			}
		}
		const dialogRef = this.dialog.open(ActionPage, { data });

		dialogRef.afterClosed().subscribe((confirmed: boolean) => {
			this.refresh = true;
			if (confirmed) {
				const a = document.createElement('a');
				a.click();
				a.remove();
			}
		});
	}

	async getMyJokes() {
		let myJokesResp: any;

		try {
			myJokesResp = await this.dataService.getMyJokesData();
		} catch (err) {
			console.error(err)
		}

		if (myJokesResp) {
			this.myJokesData = myJokesResp;
			Object.keys(myJokesResp).map((objectKey) => {

				if (!this.myJokesList.find(x => x.id === myJokesResp[objectKey].id)) {
					this.myJokesList.push(myJokesResp[objectKey])
				}
				if (!this.jokeList.find(x => x.id === myJokesResp[objectKey].id)) {
					this.jokeList.push(myJokesResp[objectKey])
				}
			})
		}
	}
}

export interface DialogData {
	title: string;
	message?: string;
	buttonText: {
		cancel: string;
		ok: string;
	},
	joke?: JokesData;
}




