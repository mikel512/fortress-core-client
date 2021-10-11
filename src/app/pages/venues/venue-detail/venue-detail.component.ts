import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Venue } from '../../../../interface/venue';
import { EventConcert } from '../../../../interface/eventconcert';
import { animate, style, transition, trigger } from '@angular/animations';
import { SpinnerOverlayService } from '../../../../services/spinner-overlay.service';
import { ApplicationPaths } from 'src/api-authorization/api-authorization.constants';

@Component({
  selector: 'app-venue-detail',
  templateUrl: './venue-detail.component.html',
  styleUrls: ['./venue-detail.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('.5s ease-out', style({ opacity: '1' })),
      ]),
    ]),
  ]
})
export class VenueDetailComponent implements OnInit {
  onTabChange: boolean = true;
  private route: ActivatedRouteSnapshot;
  private venueId: string = '';
  venue!: Venue;
  concerts: EventConcert[] = [];

  constructor(private actRouter: ActivatedRoute,
    private overlayService: SpinnerOverlayService,
    private router: Router,
    http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      let apiUrl = `${ApplicationPaths.ApiBasePath}`;

    this.route = actRouter.snapshot;
    this.venueId = this.route.params['venueId'];

    // get venue details
    http.get<Venue>(apiUrl + 'Venue/' + this.venueId).subscribe(result => {
      this.venue = result;
    }, error => console.log('error'));
    // get corresponding venue's events
    overlayService.hide();
    http.get<EventConcert[]>(apiUrl + 'Concert/' + this.venueId + '/true').subscribe(result => {
      this.concerts = result;
    }, error => console.log(error));

  }

  ngOnInit(): void {
  }

  toggleTab() {
    this.onTabChange = !this.onTabChange;
  }

}
