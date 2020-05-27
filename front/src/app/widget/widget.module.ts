import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration.pipe';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [DurationPipe, AutofocusDirective],
  imports: [CommonModule],
  exports: [DurationPipe, AutofocusDirective],
})
export class WidgetModule {}
