

import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JokeService } from 'src/service/jokes-service';

@Component({
	selector: 'app-new-joke-page',
	templateUrl: './new-joke-page.html',
	styleUrls: ['./new-joke-page.scss']
})
export class NewJokePage {

	message: string = "Are you sure?"
	confirmButtonText = "Yes"
	cancelButtonText = "Cancel"
	categoryNames: string[] = [];

	public newJokeForm: FormGroup = new FormGroup({
		newJokeInput: new FormControl('', [Validators.required]),
		newJokeCategory: new FormControl('', [Validators.required]),

	});

	constructor(
		@Inject(MAT_DIALOG_DATA) private data: any,
		private dialogRef: MatDialogRef<NewJokePage>,
		public jokesService: JokeService
	) {

		if (data) {
			this.message = data.message || this.message;
			if (data.buttonText) {
				this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
				this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
			}
		}
	}

	onConfirmClick(): void {
		this.dialogRef.close(true);
	}

}