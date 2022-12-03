import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from '../../ion2-calendar';
import { Tab1Page } from './tab1.page';
import { TravellersComponent } from './../components/travellers/travellers.component';
import { FilterComponent } from './../components/filter/filter.component';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    CalendarModule,
    IonicSelectableModule,
  ],
  entryComponents: [TravellersComponent, FilterComponent],
  declarations: [Tab1Page, TravellersComponent, FilterComponent]
})
export class Tab1PageModule {}
