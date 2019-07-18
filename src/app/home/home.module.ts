import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        VMessageModule,
        RouterModule,
        FormsModule
    ]
})
export class HomeModule {}