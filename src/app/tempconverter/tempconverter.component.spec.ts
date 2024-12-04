import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempconverterComponent } from './tempconverter.component';

describe('TempconverterComponent', () => {
  let component: TempconverterComponent;
  let fixture: ComponentFixture<TempconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempconverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
