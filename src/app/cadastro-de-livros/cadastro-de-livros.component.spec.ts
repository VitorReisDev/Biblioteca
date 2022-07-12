import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeLivrosComponent } from './cadastro-de-livros.component';

describe('CadastroDeLivrosComponent', () => {
  let component: CadastroDeLivrosComponent;
  let fixture: ComponentFixture<CadastroDeLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDeLivrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroDeLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
