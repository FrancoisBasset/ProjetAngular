import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FightComponent } from './fight/fight.component';
import { SelectionComponent } from './selection/selection.component';
import { MenuComponent } from './menu/menu.component';
import { LogComponent } from './log/log.component';
import { HealthBarComponent } from './health-bar/health-bar.component';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CodeToStringPipe } from './shared/pipes/code-to-string.pipe';
import { CreationComponent } from './creation/creation.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    FightComponent,
    SelectionComponent,
    MenuComponent,
    LogComponent,
    HealthBarComponent,
    CodeToStringPipe,
    CreationComponent
  ],
  entryComponents: [
	  CreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressBarModule,
	NoopAnimationsModule,
	MatDialogModule,
	FormsModule
  ],
  providers: [
	{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
