import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TododashbordComponent } from './tododashbord.component';

describe('TododashbordComponent', () => {
  let component: TododashbordComponent;
  let fixture: ComponentFixture<TododashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TododashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TododashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
