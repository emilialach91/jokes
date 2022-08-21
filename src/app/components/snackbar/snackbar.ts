import { Component, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
	selector: 'app-snackbar',
	templateUrl: './snackbar.html',
	styleUrls: ['./snackbar.scss']
})
export class SnakbarComponent {

	constructor(
		@Inject(MAT_SNACK_BAR_DATA) public data: any,
		public snackBar: MatSnackBar) {
	}
}
