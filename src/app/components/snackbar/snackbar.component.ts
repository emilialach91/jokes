import { Component, Inject, Input, } from '@angular/core';
import {
	MatSnackBarRef,
	MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { JokeService } from 'src/service/jokes-service';


@Component({
	selector: 'app-snackbar',
	templateUrl: './snackbar.component.html',
	styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

	constructor(
		public jokeService: JokeService,
		public snackbarRef: MatSnackBarRef<SnackbarComponent>,
		@Inject(MAT_SNACK_BAR_DATA) public data: any
	) {

	}


}
