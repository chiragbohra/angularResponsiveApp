import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatBottomSheetModule,
  MatSnackBarModule,
  MatTableModule,
  MatSliderModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatRippleModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatProgressBarModule,
  MatInputModule,
  MatListModule,
  MatCheckboxModule,
  MatCardModule,
  MatSelectModule,
  MatDatepickerModule,
  DateAdapter,
  MatNativeDateModule,
  MatTabsModule,
  MatIconModule,
  MatRadioModule,
  MatMenuModule,
  MatExpansionModule,
  MatChipsModule,
  MatToolbarModule,
  MatStepperModule,
  MatSortModule,
  MatTooltipModule,
  MatButtonToggleModule,
} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// import { ApiService } from './services/api.service';
// import { InitCapitalDirective } from './directives/init-capital.directive';
// // import { Time } from './pipes/time.pipes';
// import { AutofocusDirective } from './directives/autofocus.directive'; 
// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
// import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';
// import { highlightJsFactory } from '../core-modules/tables/tables.module';

// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//     suppressScrollX: true
// };

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatRippleModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTabsModule,
    MatRadioModule,
    MatSliderModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    // PerfectScrollbarModule,
    // FlexLayoutModule,
    MatChipsModule,
    CommonModule,
    // FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    // HighlightJsModule.forRoot({
    //   provide: HIGHLIGHT_JS,
    //   useFactory: highlightJsFactory
    // }),
  ],
  exports: [
    MatChipsModule,
    // FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTabsModule,
    MatRadioModule,
    MatSliderModule,
    // InitCapitalDirective,
    // AutofocusDirective,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    // PerfectScrollbarModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTabsModule,
    MatRadioModule,
    MatSliderModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    // PerfectScrollbarModule,
    // FlexLayoutModule,
    MatChipsModule,
    CommonModule,
    // FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule,
    // HighlightJsModule.forRoot({
    //   provide: HIGHLIGHT_JS,
    //   useFactory: highlightJsFactory
    // }),
  ],
  declarations: [ ],
  providers: [],
  entryComponents: []
})
export class SharedModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('en-GB'); // DD/MM/YYYY
  }
}
