import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { GlobalsModule } from './globals.module';
import { AppComponent } from './app.component';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from 'primeng/api';




@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgbTypeahead,
        
    ],
    declarations: [
        NgbModule
    ],
    providers: [DatePipe , ApiService, GlobalsModule, 
        ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
