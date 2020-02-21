import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CreationService } from '../creation.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CreationComponent>, public creationService: CreationService) { }

  ngOnInit(): void {
  }

  createPokemon(): void {
	  this.close();
  }

  close(): void {
	  this.dialogRef.close();
  }

}
