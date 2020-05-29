import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss'],
})
export class ChronoComponent implements OnInit, OnDestroy {
  duration$ = new BehaviorSubject(0);
  pageDuration$ = new BehaviorSubject(0);
  subscription: Subscription;
  constructor(
    private router: Router,
    private zone: NgZone,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit');

    this.zone.runOutsideAngular(() => {
      this.subscription = interval(1000).subscribe((n) => {
        const value = this.duration$.value;
        console.log('value: ', value);
        this.duration$.next(value + 1);
        const value2 = this.pageDuration$.value;
        this.pageDuration$.next(value2 + 1);
        this.changeDetectorRef.detectChanges();
      });
    });

    this.router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        this.pageDuration$.next(0);
      }
    });
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      // stop the observable
      this.subscription.unsubscribe();
    });
  }
}
