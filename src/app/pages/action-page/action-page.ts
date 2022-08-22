import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnakbarComponent } from 'src/app/components/snackbar/snackbar';
import { DataService, JokesData, SendJokeParams } from 'src/service/data-service';
import { JokeService } from 'src/service/jokes-service';

@Component({
	selector: 'app-action-page',
	templateUrl: './action-page.html',
	styleUrls: ['./action-page.scss']
})
export class ActionPage {

	public newJokeForm: FormGroup = new FormGroup({
		newJokeInput: new FormControl('', [Validators.required]),
		newJokeCategory: new FormControl('', [Validators.required]),
	});

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<ActionPage>,
		public jokeService: JokeService,
		public dataService: DataService,
		public snackBar: MatSnackBar,
	) {
	}


	async addNewJoke() {
		const params: SendJokeParams = {
			id: new Array(34).fill(undefined).map(i => (~~(Math.random() * 36)).toString(36)).join(''),
			category: this.jokeService.categoryList.find(x => x.name === this.newJokeForm.controls['newJokeCategory'].value).id,
			content: this.newJokeForm.controls['newJokeInput'].value
		}
		await this.dataService.sendMyJokesData(params);
		this.dialogRef.close(true);
		this.openAddedJokeSnackbar();
	}

	async deleteJoke(value: JokesData) {
		await this.dataService.deleteMyJoke(Object.keys(this.jokeService.myJokesData).find(key => this.jokeService.myJokesData[key].id === value.id))
		this.dialogRef.close(true);
		this.openDeletedJokeSnackbar();
		this.jokeService.listOfTempJokes = this.jokeService.listOfTempJokes.filter(item => item.id !== value.id)
	}

	openAddedJokeSnackbar() {
		this.snackBar.openFromComponent(SnakbarComponent, {
			verticalPosition: "top",
			horizontalPosition: "end",
			panelClass: ['success-snackbar'],
			duration: 4000,
			data: {
				title: 'Sukces',
				message: 'Żart został pomyślnie dodany.'
			}
		});
	};

	openDeletedJokeSnackbar() {
		this.snackBar.openFromComponent(SnakbarComponent, {
			verticalPosition: "top",
			horizontalPosition: "end",
			panelClass: ['success-snackbar'],
			duration: 4000,
			data: {
				title: 'Sukces',
				message: 'Żart został pomyślnie usunięty.'
			}
		});
	};
}