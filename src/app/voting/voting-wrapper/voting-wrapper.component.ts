import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { VotingDto } from '../../models/models';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../../services/confirm-dialog.service';
import { VotingAddEditComponent } from '../add-edit/voting-add-edit.component';

@Component({
  selector: 'app-voting-wrapper',
  templateUrl: './voting-wrapper.component.html',
  styleUrls: ['./voting-wrapper.component.css'],
})
export class VotingWrapperComponent implements OnInit {
  @Input()
  votingList: VotingDto[] | undefined;

  isActive = false;

  constructor(
    private dialog: MatDialog,
    private confirmDialogService: ConfirmDialogService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('');
  }

  openEditVotingDialog() {
    this.dialog.open(VotingAddEditComponent, {
      disableClose: true,
      width: '45rem',
      height: '30rem',
    });
    // }).afterClosed().subscribe((resultList) =>{
    //   this.votingList = resultList;
    //   this.cd.markForCheck();
    // });
  }

  openDeleteVotingDialog() {
    const msg = 'Voting wirklich löschen?'; // TODO: Show voting title
    const actionType = 'Löschen';
    const dialogRef = this.confirmDialogService.openDialog(
      actionType,
      msg,
      false
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // if( this.votingList !== undefined) {
        //   delete this.votingList[0];
        //   this.cd.markForCheck();
        // }
      }
    });
  }

  toggleButton() {
    if (this.votingList !== undefined) {
      console.log('active', this.isActive);

      this.votingList[0].isActive = !this.isActive;
      this.isActive = !this.isActive;
    }

    const msg =
      'Voting wirklich starten? <br> <br>Nach Start des Votings können keine <br> neuen Bands mehr hinzugefügt werden.'; // TODO: Show voting title
    const actionType = 'Starten';
    const dialogRef = this.confirmDialogService.openDialog(
      actionType,
      msg,
      false
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // if( this.votingList !== undefined) {
        //   delete this.votingList[0];
        //   this.cd.markForCheck();
        // }
      }
    });
  }

  onVtnClick() {
    // Navigate to /add-edit page
    this.dialog.open(VotingAddEditComponent, {
      disableClose: true,
      width: '45rem',
      height: '30rem',
    });
  }
}
