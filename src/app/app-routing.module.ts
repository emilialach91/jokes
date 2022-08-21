import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesPage } from './pages/jokes-page/jokes-page';
import { MyJokesPage } from './pages/my-jokes-page/my-jokes-page';

const routes: Routes = [
	{ path: '', component: JokesPage },
	{ path: 'my-jokes-page', component: MyJokesPage },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }