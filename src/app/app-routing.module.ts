import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelTreningComponent } from './panel-trening/panel-trening.component';
import { PanelPlanyComponent } from './panel-plany/panel-plany.component';
import { KalendarzComponent } from './kalendarz/kalendarz.component';
import { TreningComponent } from './treningi/trening/trening.component';

const routes: Routes = [
    {path: 'panel-trening', component: PanelTreningComponent},
    {path: 'treningi/trening', redirectTo: 'treningi/trening', pathMatch: 'full'},
    {path: 'panel-plany', component: PanelPlanyComponent},
    {path: 'kalendarz', component: KalendarzComponent},
    {path: '', redirectTo: 'panel-trening', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}