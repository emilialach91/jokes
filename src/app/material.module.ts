import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	exports: [
		MatTableModule,
		MatInputModule,
		MatIconModule,
		MatDialogModule,
		MatButtonModule,
		MatSnackBarModule,
		MatProgressSpinnerModule
	]
})
export class MaterialModule { }