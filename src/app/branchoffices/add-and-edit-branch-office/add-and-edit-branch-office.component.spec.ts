import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditBranchOfficeComponent } from './add-and-edit-branch-office.component';

describe('AddAndEditBranchOfficeComponent', () => {
  let component: AddAndEditBranchOfficeComponent;
  let fixture: ComponentFixture<AddAndEditBranchOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAndEditBranchOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndEditBranchOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
