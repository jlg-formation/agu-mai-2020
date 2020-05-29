import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration.pipe';
import { AutofocusDirective } from './autofocus.directive';
import { ChronoComponent } from './chrono/chrono.component';

@NgModule({
  declarations: [DurationPipe, AutofocusDirective, ChronoComponent],
  imports: [CommonModule],
  exports: [DurationPipe, AutofocusDirective, ChronoComponent],
})
export class WidgetModule {}
