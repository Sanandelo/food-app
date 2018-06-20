import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recepies/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const appRounts: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent},
  {path: 'shopping-list', component: ShoppingListComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(appRounts)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
