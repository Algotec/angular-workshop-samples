import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {ToastModule} from 'ng2-toastr';
import {FileDropDirective, FileSelectDirective} from 'ng2-file-upload';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
let sharedModules = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, ToastModule];
let commonPipes = [];
let commonDirectives = [FileDropDirective, FileSelectDirective];

@NgModule({
    declarations: [...commonPipes, ...commonDirectives],
    imports: sharedModules,
    exports: [...commonDirectives, ...commonPipes, ...sharedModules]
})
export class SharedModule {
}
