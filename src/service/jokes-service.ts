
import { Injectable } from '@angular/core';
import { NewJokePage } from 'src/app/pages/new-joke-page/new-joke-page';

import { MatDialog } from '@angular/material/dialog';

@Injectable()

export class JokeService {

	categoryList: any[] = []
	jokeList: any[] = [];

	constructor(
		public dialog: MatDialog,
	) {

	}

	openDialog() {
		console.log('dupa')
		const dialogRef = this.dialog.open(NewJokePage, {
			data: {
				message: 'Are you sure want to delete?',
				buttonText: {
					ok: 'Save',
					cancel: 'No'
				}
			}
		});

		dialogRef.afterClosed().subscribe((confirmed: boolean) => {
			if (confirmed) {
				const a = document.createElement('a');
				a.click();
				a.remove();
			}
		});
	}
}




