import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchofficesComponent } from './branchoffices.component';

describe('BranchofficesComponent', () => {
  let component: BranchofficesComponent;
  let fixture: ComponentFixture<BranchofficesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchofficesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchofficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
