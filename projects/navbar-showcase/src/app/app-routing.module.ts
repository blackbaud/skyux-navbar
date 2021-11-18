import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarVisualComponent } from './visual/navbar/navbar-visual.component';
import { VisualComponent } from './visual/visual.component';

const routes: Routes = [
  {
    path: '',
    component: VisualComponent,
  },
  {
    path: 'visual/navbar',
    component: NavbarVisualComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
