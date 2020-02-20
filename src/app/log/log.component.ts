import { Component, OnInit } from '@angular/core';
import { GameService } from '../services';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  constructor(public gameService: GameService) { }

  ngOnInit(): void {

  }

}
