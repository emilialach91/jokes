import { Component, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { JokeService } from 'src/service/jokes-service';

@Component({
	selector: 'app-snackbar',
	templateUrl: './snackbar.html',
	styleUrls: ['./snackbar.scss']
})
export class SnakbarComponent {

	constructor(
		@Inject(MAT_SNACK_BAR_DATA) public data: any,
		public snackBar: MatSnackBar,
		public jokeService: JokeService,) {
	}

	async dismiss() {
		this.snackBar.dismiss()
		await this.jokeService.getMyJokes();
	}
}
