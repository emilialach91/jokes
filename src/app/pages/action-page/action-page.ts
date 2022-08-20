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
			id: new Array(34).fill(undefined).map(i => (~~(Math.random() * 36)).toString(36)).join(''),
			category: this.jokeService.categoryList.find(x => x.name === this.newJokeForm.controls['newJokeCategory'].value).id,
			content: this.newJokeForm.controls['newJokeInput'].value
		}
		let resp: any;

		resp = await this.dataService.sendMyJokesData(params);
		this.dialogRef.close(true);
		this.jokeService.openSnackBar('Żart został pomyślnie dodany', null, 3000)

	}

	async deleteJoke(value: any) {
		let resp: any;
		resp = await this.dataService.deleteMyJoke(Object.keys(this.jokeService.myJokesData).find(key => this.jokeService.myJokesData[key] === value))
		this.dialogRef.close(true);
	}

}