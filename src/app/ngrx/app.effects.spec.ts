import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RespuestaEffects } from './respuesta-effects.service';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: RespuestaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RespuestaEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<RespuestaEffects>(RespuestaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
