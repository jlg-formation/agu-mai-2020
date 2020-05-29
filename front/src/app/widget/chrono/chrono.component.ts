import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.scss'],
})
export class ChronoComponent implements OnInit {
  duration$ = new BehaviorSubject(0);
  pageDuration$ = new BehaviorSubject(0);
  constructor(private router: Router) {}

  ngOnInit(): void {
    interval(1000).subscribe((n) => {
      const value = this.duration$.value;
      this.duration$.next(value + 1);
      const value2 = this.pageDuration$.value;
      this.pageDuration$.next(value2 + 1);
    });

    this.router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd) {
        this.pageDuration$.next(0);
      }
    });
  }
}
