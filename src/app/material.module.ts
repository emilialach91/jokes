import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	exports: [
		MatTableModule,
		MatInputModule,
		MatIconModule,
		MatDialogModule,
		MatButtonModule
	]
})
export class MaterialModule { }