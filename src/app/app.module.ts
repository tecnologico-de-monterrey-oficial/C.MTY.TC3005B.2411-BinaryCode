import { NgModule } from '@angular/core';

// Declarations
import { AppComponent } from './app.component';

// Imports angular
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Imports locales
import { ElementosModule } from './elementos/elementos.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,

        ElementosModule,
        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
