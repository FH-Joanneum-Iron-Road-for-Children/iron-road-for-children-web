import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { VotingDto } from '../../models/models';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogService } from '../../services/confirm-dialog.service';
import { AddVotingComponent } from '../add-edit/add-voting/add-voting.component';
import { EditVotingComponent } from '../add-edit/edit-voting/edit-voting.component';
import { VotingService } from '../../services/voting.service';

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
    private votingService: VotingService,
    private confirmDialogService: ConfirmDialogService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('');
  }

  openEditVotingDialog(id: number | undefined) {
    if (id !== undefined) {
      this.votingService.getVotingById(id).subscribe(
        (voting) => {
          this.dialog.open(EditVotingComponent, {
            data: voting,
            disableClose: true,
            width: '45rem',
            height: '30rem',
          });
          // }).afterClosed().subscribe((resultList) =>{
          //   this.votingList = resultList;
          //   this.cd.markForCheck();
          // });
        },
        (error) => console.log('Das Voting konnte nicht geladen werden.')
      );
    } else showAlert('Es konnte kein Voting gefunden werden.');
  }

  openDeleteVotingDialog() {
    const msg = 'Voting wirklich löschen?'; // TODO: Show voting title
    const actionType = 'Löschen';
    const dialogRef = this.confirmDialogService.openDialog(actionType, msg);

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
    const dialogRef = this.confirmDialogService.openDialog(actionType, msg);

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
    this.dialog.open(AddVotingComponent, {
      disableClose: true,
      width: '45rem',
      height: '30rem',
    });
  }
}

function showAlert(message: string) {
  // Update the DOM with the error message
  const alertContainer = document.getElementById('alert-container');
  if (alertContainer !== null) {
    alertContainer.innerText = message;
    alertContainer.style.display = 'block';
  }
}
