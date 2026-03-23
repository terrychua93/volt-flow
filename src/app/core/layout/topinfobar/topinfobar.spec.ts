import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topinfobar } from './topinfobar';

describe('Topinfobar', () => {
  let component: Topinfobar;
  let fixture: ComponentFixture<Topinfobar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topinfobar],
    }).compileComponents();

    fixture = TestBed.createComponent(Topinfobar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
