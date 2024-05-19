import { NgModule } from '@angular/core';

// Declarations
import { AppComponent } from './app.component';

// Imports angular
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// Imports ng-zorro
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';

// Imports locales
import { AppRoutingModule } from './app-routing.module';
import { ElementosModule } from './elementos/elementos.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpClientModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,

        NzDropDownModule,
        NzIconModule,
        NzInputModule,
        NzLayoutModule,
        NzMenuModule,
        NzModalModule,

        ElementosModule,
        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
