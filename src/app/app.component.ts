import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  RoutesRecognized,
  RouterOutlet,
} from '@angular/router';
import { Subscription, filter, pairwise } from 'rxjs';
import { RouterService } from './services/routerService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  routerSubs: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private routeService: RouterService
  ) {}
  ngOnInit(): void {
    this.routerSubs = this.router.events
      .pipe(
        filter((e: any) => e instanceof RoutesRecognized),
        pairwise()
      )
      .subscribe((event: any[]) => {
        const previuosPath = event[0].urlAfterRedirects;
        const currentPath = event[1].urlAfterRedirects;

        this.routeService.previousPath.next(previuosPath);
        this.routeService.currentPath.next(currentPath);
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubs) this.routerSubs.unsubscribe();
  }
}
