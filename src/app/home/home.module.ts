import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectedMaterialModules } from '../services/material.module';

import { HomeRoutingModule } from './services/home-routing.module';

import { HeaderComponent as HomeHeader } from './header/header.component';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        // FormsModule,
        // ReactiveFormsModule,
        HomeRoutingModule,
        SelectedMaterialModules
    ],
    declarations: [
        HomeHeader,
        HomeComponent
    ],
    providers: [
        // ProjectService
    ]
})
export class HomeModule { }
