import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPublishClassComponent } from './form-publish-class.component';

describe('FormPublishClassComponent', () => {
  let component: FormPublishClassComponent;
  let fixture: ComponentFixture<FormPublishClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPublishClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPublishClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
