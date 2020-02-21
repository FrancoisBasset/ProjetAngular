import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.scss']
})
export class HealthBarComponent implements OnInit {
  @Input() health: number;
  @Input() maxHealth: number;

  constructor() { }

  ngOnInit(): void {
  }

  get value() {
    if ( this.health && this.maxHealth )
      return this.health * 100 / this.maxHealth;
    return 0;
  }

  get color (): ThemePalette {
    if ( this.value < 20 )
      return 'warn';
    if ( this.value < 40 )
      return 'accent';
    return 'primary';
  }

}
