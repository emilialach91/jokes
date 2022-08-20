import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
	exports: [
		MatTableModule,
		MatInputModule,
		MatIconModule,
		MatDialogModule,
		MatButtonModule,
		MatSnackBarModule
	]
})
export class MaterialModule { }