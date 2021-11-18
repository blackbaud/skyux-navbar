import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualComponent } from './visual.component';
import { SkyNavbarModule } from 'projects/navbar/src/public-api';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkyDropdownModule } from '@skyux/popovers';
import { NavbarVisualComponent } from './navbar/navbar-visual.component';

@NgModule({
  declarations: [VisualComponent, NavbarVisualComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SkyNavbarModule,
    SkyDropdownModule,
  ],
})
export class VisualModule {}
