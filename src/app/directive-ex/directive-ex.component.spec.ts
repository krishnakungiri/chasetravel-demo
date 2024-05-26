import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExComponent } from './directive-ex.component';

describe('DirectiveExComponent', () => {
  let component: DirectiveExComponent;
  let fixture: ComponentFixture<DirectiveExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
