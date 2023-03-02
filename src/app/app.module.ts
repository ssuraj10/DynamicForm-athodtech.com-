import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { DyanamicFormComponent } from './dyanamic-form/dyanamic-form.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DyanamicFormComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
