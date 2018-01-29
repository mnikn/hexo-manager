import { TestBed, inject } from '@angular/core/testing';

import { HotkeyService } from './hotkey.service';

describe('HotkeyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotkeyService]
    });
  });

  it('should be created', inject([HotkeyService], (service: HotkeyService) => {
    expect(service).toBeTruthy();
  }));
});
