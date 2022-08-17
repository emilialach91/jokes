// import { Component } from '@angular/core';

// @Component({
// 	selector: 'app-new-joke-page',
// 	templateUrl: './new-joke-page.html',
// 	styleUrls: ['./new-joke-page.scss']
// })
// export class NewJokePage {

// 	constructor(
// 	) { }

// }

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-new-joke-page',
	templateUrl: './new-joke-page.html',
	styleUrls: ['./new-joke-page.scss']
})
export class NewJokePage {

	message: string = "Are you sure?"
	confirmButtonText = "Yes"
	cancelButtonText = "Cancel"

	constructor(
		@Inject(MAT_DIALOG_DATA) private data: any,
		private dialogRef: MatDialogRef<NewJokePage>) {
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