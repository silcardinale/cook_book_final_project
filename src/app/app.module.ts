import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FormPublishRecipesComponent } from './pages/form-publish-recipes/form-publish-recipes.component';
import { FollowPageComponent } from './pages/follow-page/follow-page.component';
import { FormPublishClassComponent } from './pages/form-publish-class/form-publish-class.component';
import { SearchRecipesComponent } from './pages/search-recipes/search-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormPublishRecipesComponent,
    FollowPageComponent,
    FormPublishClassComponent,
    SearchRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
