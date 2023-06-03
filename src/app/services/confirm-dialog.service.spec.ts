import { TestBed } from '@angular/core/testing';

import { ConfirmDialogService } from './confirm-dialog.service';
import { MatDialog } from '@angular/material/dialog';

describe('ConfirmDialogServiceService', () => {
  let service: ConfirmDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: MatDialog, useValue: {} }],
    });
    service = TestBed.inject(ConfirmDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
