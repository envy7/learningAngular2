import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuBuilderComponent } from './demo-form-sku-builder.component';

describe('DemoFormSkuBuilderComponent', () => {
  let component: DemoFormSkuBuilderComponent;
  let fixture: ComponentFixture<DemoFormSkuBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormSkuBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
