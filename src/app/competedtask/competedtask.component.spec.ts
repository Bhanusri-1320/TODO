import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetedtaskComponent } from './competedtask.component';

describe('CompetedtaskComponent', () => {
  let component: CompetedtaskComponent;
  let fixture: ComponentFixture<CompetedtaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetedtaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetedtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
