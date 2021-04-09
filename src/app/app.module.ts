import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparisonTableComponent } from './comparison-table/comparison-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ImageCardComponent } from './comparison-table/image-card/image-card.component';
import { ImageTableComponent } from './comparison-table/image-table/image-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    ComparisonTableComponent,
    ImageCardComponent,
    ImageTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSliderModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
