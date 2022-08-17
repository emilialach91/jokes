import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { ShippingComponent } from './pages/shipping/shipping.component';
import { HeaderComponent } from './components/header/header';
import { CardLargeComponent } from './components/card-large/card-large.component';
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { DataService } from 'src/service/data-service';
import { CartSmallComponent } from './components/cart-small/cart-small.component';
import { JokesPage } from './pages/jokes-page/jokes-page';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		provideFirebaseApp(() => initializeApp(environment.firebase)),
		provideFirestore(() => getFirestore()),
		RouterModule.forRoot([
			{ path: '', component: JokesPage },
			{ path: 'products/:productId', component: CardLargeComponent },
			// { path: 'cart', component: CartComponent },
			{ path: 'shipping', component: ShippingComponent },
		]),
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		// ProductListComponent,
		// ProductAlertsComponent,
		CardLargeComponent,
		CartSmallComponent,
		ShippingComponent,
		JokesPage
	],
	bootstrap: [
		AppComponent
	],
	providers: [
		DataService
	]
})
export class AppModule { }
