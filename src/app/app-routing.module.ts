import { FormPublishRecipesComponent } from './pages/form-publish-recipes/form-publish-recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPublishClassComponent } from './pages/form-publish-class/form-publish-class.component';

const routes: Routes = [
  {path: 'publishRecipe', component: FormPublishRecipesComponent},
  {path: 'publishClass', component: FormPublishClassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
