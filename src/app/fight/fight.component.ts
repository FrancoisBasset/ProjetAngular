import { Component, OnInit, Input, OnDestroy, ViewChild, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GameService, PokeApiService } from 'src/app/services';
//import { AllPokemons } from '../../pokemons';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.scss']
})
export class FightComponent implements OnInit, OnDestroy, AfterViewChecked {
  on: boolean = false;
  actionBtnSrc: string = '../../assets/images/shared/FIGHT.png'

  constructor(private route: ActivatedRoute, public gameService: GameService, private pokeApiService: PokeApiService) { }

  autoScroll(): void {
    let myDiv = document.getElementById("logBox");
    myDiv.scrollTop = myDiv.scrollHeight - myDiv.offsetHeight;
  }

  ngOnInit(): void {
	  this.route.queryParams.subscribe(params => {
      this.pokeApiService.getByKey(params.pokemonA).subscribe((p) => { this.gameService.pokemonA = p})
      this.pokeApiService.getByKey(params.pokemonB).subscribe((p) => { this.gameService.pokemonB = p})
    })
	//this.log = '';
  }

  ngAfterViewChecked() {
    this.autoScroll()
  }

  onClick(): void {
    if (this.on) {
      this.on = false;
	    this.gameService.pause();
    } else {
      this.on = true;	  
      this.gameService.play();
    }

    if (this.on)
      this.actionBtnSrc =  "../../assets/images/shared/PAUSE.png"
    else
      this.actionBtnSrc = "../../assets/images/shared/FIGHT.png"
  }

  ngOnDestroy(): void {
    this.gameService.pause();
  }
}
