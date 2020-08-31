import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPublishRecipesComponent } from './form-publish-recipes.component';

describe('FormPublishRecipesComponent', () => {
  let component: FormPublishRecipesComponent;
  let fixture: ComponentFixture<FormPublishRecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPublishRecipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPublishRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
