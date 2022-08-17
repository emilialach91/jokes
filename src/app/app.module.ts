import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { NewJokePage } from './pages/new-joke-page/new-joke-page';
import { HeaderComponent } from './components/header/header';
import { CardLargeComponent } from './components/card-large/card-large.component';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DataService } from 'src/service/data-service';
import { CartSmallComponent } from './components/cart-small/cart-small.component';
import { JokesPage } from './pages/jokes-page/jokes-page';
import { MyJokesPage } from './pages/my-jokes-page/my-jokes-page';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideFirestore(() => getFirestore()),
		RouterModule.forRoot([
			{ path: '', component: JokesPage },
			{ path: 'new-joke-page', component: NewJokePage },
			{ path: 'my-jokes-page', component: MyJokesPage },
		]),
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		CardLargeComponent,
		CartSmallComponent,
		JokesPage,
		MyJokesPage,
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		DataService,
	],
	entryComponents: [
		NewJokePage
	]
})
export class AppModule { }
