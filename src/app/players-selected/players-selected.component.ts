import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {PlayersComponent} from '../players/players.component';

@Component({
  selector: 'app-players-selected',
  templateUrl: './players-selected.component.html',
  styleUrls: ['./players-selected.component.css']
})
export class PlayersSelectedComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(PlayersComponent, dialogConfig);
  }

}
