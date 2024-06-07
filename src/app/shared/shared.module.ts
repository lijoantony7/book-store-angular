import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    NotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [ToolbarComponent]
})
export class SharedModule { }
