import { NgModule } from '@angular/core';
import { RandomColor } from './random-color.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  exports: [RandomColor, ReversePipe],
  declarations: [RandomColor, ReversePipe],
})
export class SharedModule {}
