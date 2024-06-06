import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerExComponent } from './ng-container-ex.component';

describe('NgContainerExComponent', () => {
  let component: NgContainerExComponent;
  let fixture: ComponentFixture<NgContainerExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContainerExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContainerExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
