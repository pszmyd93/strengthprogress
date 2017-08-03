import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelTreningComponent } from './panel-trening/panel-trening.component';
import { PanelPlanyComponent } from './panel-plany/panel-plany.component';
import { KalendarzComponent } from './kalendarz/kalendarz.component';
import { MiniaturaComponent } from './plany/miniatura/miniatura.component';
import { PlanTreningowyComponent } from './plany/plan-treningowy/plan-treningowy.component';
import { SzablonCwiczeniaComponent } from './plany/szablon-cwiczenia/szablon-cwiczenia.component';
import { CwiczenieComponent } from './treningi/cwiczenie/cwiczenie.component';
import { TreningComponent } from './treningi/trening/trening.component';

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
    TreningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
