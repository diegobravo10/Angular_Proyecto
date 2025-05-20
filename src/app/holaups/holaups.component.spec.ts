import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaupsComponent } from './holaups.component';

describe('HolaupsComponent', () => {
  let component: HolaupsComponent;
  let fixture: ComponentFixture<HolaupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolaupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolaupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
