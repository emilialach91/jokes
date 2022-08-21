import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header';

import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DataService } from 'src/service/data-service';
import { JokesPage } from './pages/jokes-page/jokes-page';
import { MyJokesPage } from './pages/my-jokes-page/my-jokes-page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { JokeService } from 'src/service/jokes-service';
import { MaterialModule } from './material.module';
import { ActionPage } from './pages/action-page/action-page';
import { SnakbarComponent } from './components/snackbar/snackbar';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		MaterialModule,
		BrowserAnimationsModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideFirestore(() => getFirestore()),
		AppRoutingModule
	],
	exports: [
		MatDialogModule,
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		JokesPage,
		MyJokesPage,
		ActionPage,
		SnakbarComponent
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		DataService,
		JokeService
	],
})
export class AppModule { }
