import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PanelTreningComponent } from './panel-trening/panel-trening.component';
import { PanelPlanyComponent } from './panel-plany/panel-plany.component';
import { KalendarzComponent } from './kalendarz/kalendarz.component';
import { MiniaturaComponent } from './plany/miniatura/miniatura.component';
import { PlanTreningowyComponent } from './plany/plan-treningowy/plan-treningowy.component';
import { SzablonCwiczeniaComponent } from './plany/szablon-cwiczenia/szablon-cwiczenia.component';
import { CwiczenieComponent } from './treningi/cwiczenie/cwiczenie.component';
import { TreningComponent } from './treningi/trening/trening.component';
import { AppRoutingModule } from './app-routing.module';
import { TimerComponent } from './treningi/timer/timer.component';
import { DodajCwiczenieComponent } from './treningi/cwiczenie/dodaj-cwiczenie/dodaj-cwiczenie.component';
import { SeriaComponent } from './treningi/cwiczenie/seria/seria.component';
import { PlanTreningowyService } from './plany/plan-treningowy.service';
import { MiniaturatrComponent } from './panel-trening/miniaturatr/miniaturatr.component';   

import { AngularFontAwesomeModule } from 'angular-font-awesome';


import * as jQuery from 'jquery';
import { AutoCompleteModule, ScheduleModule, DialogModule, CalendarModule, DropdownModule } from 'primeng/primeng';
(window as any).jQuery = (window as any).$ = jQuery; // This is needed to resolve issue.

import {MenuItem} from 'primeng/primeng';
         //api

@NgModule({
  declarations: [
    AppComponent,
    PanelTreningComponent,
    PanelPlanyComponent,
    KalendarzComponent,
    MiniaturaComponent,
    PlanTreningowyComponent,
    SzablonCwiczeniaComponent,
    CwiczenieComponent,
    TreningComponent,
    TimerComponent,
    DodajCwiczenieComponent,
    SeriaComponent,
    MiniaturatrComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ScheduleModule,
    AngularFontAwesomeModule
  ],
  providers: [PlanTreningowyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
