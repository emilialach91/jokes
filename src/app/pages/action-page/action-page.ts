import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/service/data-service';
import { JokeService } from 'src/service/jokes-service';

@Component({
	selector: 'app-action-page',
	templateUrl: './action-page.html',
	styleUrls: ['./action-page.scss']
})
export class ActionPage {

	categoryNames: string[] = [];

	public newJokeForm: FormGroup = new FormGroup({
		newJokeInput: new FormControl('', [Validators.required]),
		newJokeCategory: new FormControl('', [Validators.required]),
	});

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private dialogRef: MatDialogRef<ActionPage>,
		public jokeService: JokeService,
		public dataService: DataService
	) {
	}


	async addNewJoke() {
		const params: any = {
			id: 'hfffdfghfgjdghj',
			category: 'o jasiu',
			content: "prosze niech to dziala"
		}
		let resp: any;

		resp = await this.dataService.sendMyJokesData(params);
		this.dialogRef.close(true);

	}

	async deleteJoke(value: any) {
		let resp: any;
		resp = await this.dataService.deleteMyJoke(Object.keys(this.jokeService.myJokesData).find(key => this.jokeService.myJokesData[key] === value))
	}

}