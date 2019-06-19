import { NgModule } from '@angular/core';

import { MatButtonModule,MatButtonToggleModule,MatIconModule, 
  MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule,
  MatSidenavModule, MatMenuModule, MatListModule, MatDividerModule,
  MatGridListModule, MatExpansionModule, MatCardModule, MatTabsModule,
  MatStepperModule, MatFormFieldModule, MatInputModule, MatSelectModule,
  MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule,
  MatNativeDateModule, MatTooltipModule, MatSnackBarModule, MatDialogModule,
  MatTableModule, MatSortModule, MatPaginatorModule
} from '@angular/material';

import { ScrollingModule } from '@angular/cdk/scrolling';

const MaterialComponent = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  ScrollingModule
]
@NgModule({
  imports: [ MaterialComponent ],
  exports: [ MaterialComponent ]
})
export class MaterialModule { }
