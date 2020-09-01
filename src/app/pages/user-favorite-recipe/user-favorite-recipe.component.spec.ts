import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoriteRecipeComponent } from './user-favorite-recipe.component';

describe('UserFavoriteRecipeComponent', () => {
  let component: UserFavoriteRecipeComponent;
  let fixture: ComponentFixture<UserFavoriteRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFavoriteRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavoriteRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
