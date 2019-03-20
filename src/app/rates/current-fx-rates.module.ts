import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CurrentFxRatesRoutingModule } from './current-fx-rates-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'primeng/accordion';
import { CurrentFxRates } from './current-fx-rates.component';
import { RouterModule } from '@angular/router';

import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';

import {CardModule} from 'primeng/card';


@NgModule({
  declarations: [
    CurrentFxRates,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    InputTextModule,
    AccordionModule,
    CurrentFxRatesRoutingModule,
    HttpClientModule,
    BrowserModule,
    AutoCompleteModule,
    HttpClientModule,
    CurrentFxRatesRoutingModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [CurrentFxRates]
})
export class CurrentFxRatesModule { }

