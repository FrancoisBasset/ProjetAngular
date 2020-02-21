import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  date: Date = new Date();

  constructor(public logService: LogService) { }

  ngOnInit(): void {
	  this.logService.log = [

    ];
  }

}
