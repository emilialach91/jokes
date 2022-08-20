import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ActionPage } from './pages/action-page/action-page';
import { HeaderComponent } from './components/header/header';

import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DataService } from 'src/service/data-service';
import { CartSmallComponent } from './components/cart-small/cart-small.component';
import { JokesPage } from './pages/jokes-page/jokes-page';
import { MyJokesPage } from './pages/my-jokes-page/my-jokes-page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { JokeService } from 'src/service/jokes-service';
import { MaterialModule } from './material.module';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		MaterialModule,
		BrowserAnimationsModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideFirestore(() => getFirestore()),
		RouterModule.forRoot([
			{ path: '', component: JokesPage },
			{ path: 'my-jokes-page', component: MyJokesPage },
		]),
	],
	exports: [
		MatDialogModule,
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		SnackbarComponent,
		JokesPage,
		MyJokesPage,
		ActionPage,
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
