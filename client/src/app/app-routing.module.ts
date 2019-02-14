import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListItemComponent } from './users/user-list-item/user-list-item.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{
	path: 'users',
	component: UsersComponent,
	children: [{
		path: ':id',
		component: UserListItemComponent
	}]
}]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
