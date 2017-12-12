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
    SeriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PlanTreningowyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
