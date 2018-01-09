/**
 *  shared.module.ts
 *    - shared module declaration, contains components that don’t import and inject services from
 *    core or other features in their constructors
 *
 **************************************************************************************************/

// importing 3rd party libraries
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

// creating the module
@NgModule({
  imports: [
    // angular modules
    FormsModule,
    CommonModule,

    // 3rd party libraries
    MatCardModule,
    MatToolbarModule,
  ],
  declarations: [
    // custom components
  ],
  exports: [
    // angular modules
    FormsModule,
    CommonModule,

    // 3rd party libraries
    MatCardModule,
    MatToolbarModule,

    // custom components
  ]
})
export class SharedModule { }
