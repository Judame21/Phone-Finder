import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelularesAdminComponent } from './celulares-admin.component';

describe('CelularesAdminComponent', () => {
  let component: CelularesAdminComponent;
  let fixture: ComponentFixture<CelularesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelularesAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelularesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
