import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleCritiqueComponent } from './modale-critique.component';

describe('ModaleCritiqueComponent', () => {
  let component: ModaleCritiqueComponent;
  let fixture: ComponentFixture<ModaleCritiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaleCritiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModaleCritiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
