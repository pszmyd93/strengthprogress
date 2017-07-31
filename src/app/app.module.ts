import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelTreningComponent } from './panel-trening/panel-trening.component';
import { PanelPlanyComponent } from './panel-plany/panel-plany.component';
import { KalendarzComponent } from './kalendarz/kalendarz.component';
import { MiniaturaComponent } from './plany/miniatura/miniatura.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelTreningComponent,
    PanelPlanyComponent,
    KalendarzComponent,
    MiniaturaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
