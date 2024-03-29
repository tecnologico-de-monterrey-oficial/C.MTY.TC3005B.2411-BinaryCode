import { NgModule } from '@angular/core';

import { MainLayoutRoutingModule } from './main-layout-routing.module';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HeaderComponent } from './header/header.component';
import { MainLayoutComponent } from './main-layout.component';

@NgModule({
  imports: [
    MainLayoutRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule
  ],
  declarations: [
    MainLayoutComponent,
    HeaderComponent
  ],
  exports: [MainLayoutComponent],
})
export class MainLayoutModule { }
