import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FormPublishRecipesComponent } from './pages/form-publish-recipes/form-publish-recipes.component';
import { FollowPageComponent } from './pages/follow-page/follow-page.component';
import { FormPublishClassComponent } from './pages/form-publish-class/form-publish-class.component';
import { SearchRecipesComponent } from './pages/search-recipes/search-recipes.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { UserRecipesComponent } from './pages/user-recipes/user-recipes.component';
import { UserFavoriteRecipeComponent } from './pages/user-favorite-recipe/user-favorite-recipe.component';
import { ClassesResultComponent } from './pages/classes-result/classes-result.component';
import { LessonServiceService } from './shared/lesson-service.service';
import { UserClassesComponent } from './pages/user-classes/user-classes.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';

// Services
import { CookbookService } from './shared/cookbook.service';
import { UserService } from './shared/user.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FormPublishRecipesComponent,
    FollowPageComponent,
    FormPublishClassComponent,
    SearchRecipesComponent,
    RecipesComponent,
    RecipeComponent,
    LoginComponent,
    InicioComponent,
    RegisterComponent,
    ClassesComponent,
    UserRecipesComponent,
    UserFavoriteRecipeComponent,
    ClassesResultComponent,
    UserClassesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    CookbookService,
    UserService,
    LessonServiceService],

  bootstrap: [AppComponent]
})
export class AppModule { }
