
import { Injectable } from '@angular/core';
import { ActionPage } from 'src/app/pages/action-page/action-page';

import { MatDialog } from '@angular/material/dialog';

@Injectable()

export class JokeService {

	categoryList: any[] = []
	jokeList: any[] = [];
	myJokesData: any;

	constructor(
		public dialog: MatDialog,
	) {

	}

	openDialog(joke?: string) {
		let data: object;
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
				title: 'Dodawanie żartu ',
				message: null,
				buttonText: {
					cancel: 'Anuluj',
					ok: 'Dodaj',
				}
			}
		}
		const dialogRef = this.dialog.open(ActionPage, { data });

		dialogRef.afterClosed().subscribe((confirmed: boolean) => {
			if (confirmed) {
				const a = document.createElement('a');
				a.click();
				a.remove();
			}
		});
	}
}




