import { FollowPageComponent } from './pages/follow-page/follow-page.component';
import { SearchRecipesComponent } from './pages/search-recipes/search-recipes.component';
import { FormPublishRecipesComponent } from './pages/form-publish-recipes/form-publish-recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPublishClassComponent } from './pages/form-publish-class/form-publish-class.component';

const routes: Routes = [
  {path: 'publishRecipe', component: FormPublishRecipesComponent},
  {path: 'publishClass', component: FormPublishClassComponent},
  {path: 'searchRecipe', component: SearchRecipesComponent},
  {path: 'followers', component: FollowPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
