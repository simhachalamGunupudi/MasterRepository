import {
  NgModule,
  OnInit
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModuleComponent} from './shared-module.component';
import {SharedModuleService} from './shared-module.service';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SharedModuleComponent],
  declarations: [SharedModuleComponent],
  providers: [SharedModuleService]
})
export class SharedModuleModule {

  constructor() {

  }

}
