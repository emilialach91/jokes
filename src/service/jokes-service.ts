
import { Injectable } from '@angular/core';
import { ActionPage } from 'src/app/pages/action-page/action-page';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()

export class JokeService {

	categoryList: any[] = []
	jokeList: any[] = [];
	myJokesData: any;

	constructor(
		public dialog: MatDialog,
		public _snackBar: MatSnackBar
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

	openSnackBar(content: string, action: any, duration: number) {
		this._snackBar.open(content, action, {
			duration: duration,
			verticalPosition: "top", // Allowed values are  'top' | 'bottom'
			horizontalPosition: "end" // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
		});
	}
}




