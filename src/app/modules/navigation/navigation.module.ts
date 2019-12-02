import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddressComponent } from './components/address/address.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavComponent, DashboardComponent, DragdropComponent, AddressComponent],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule
  ]
})
export class NavigationModule { }
