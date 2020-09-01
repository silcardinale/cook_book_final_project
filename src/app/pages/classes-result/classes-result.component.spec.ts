import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesResultComponent } from './classes-result.component';

describe('ClassesResultComponent', () => {
  let component: ClassesResultComponent;
  let fixture: ComponentFixture<ClassesResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
