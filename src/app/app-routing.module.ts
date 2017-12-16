import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelTreningComponent } from './panel-trening/panel-trening.component';
import { PanelPlanyComponent } from './panel-plany/panel-plany.component';
import { KalendarzComponent } from './kalendarz/kalendarz.component';
import { TreningComponent } from './treningi/trening/trening.component';
import { PlanTreningowyComponent } from './plany/plan-treningowy/plan-treningowy.component';

const routes: Routes = [
    {path: 'panel-trening', component: PanelTreningComponent},
    {path: 'panel-trening/treningi/trening', component: TreningComponent},
    {path: 'panel-plany/treningi/trening', component: TreningComponent},
    {path: 'panel-plany/treningi/trening/:nazwa/nowy', component: TreningComponent},
    {path: 'panel-plany/plany/plan-treningowy', component: PlanTreningowyComponent},
    {path: 'panel-plany/plany/plan-treningowy/:id/edit', component: PlanTreningowyComponent},
    {path: 'panel-plany', component: PanelPlanyComponent},
    {path: 'panel-trening/panel-plany', redirectTo: 'panel-plany', pathMatch: 'full'},
    {path: 'kalendarz', component: KalendarzComponent},
    {path: '', redirectTo: 'panel-trening', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}