import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ApplicationPaths } from 'src/api-authorization/api-authorization.constants';
import { EventConcert } from '../../../../interface/eventconcert';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit, AfterViewChecked {
  private route?: ActivatedRouteSnapshot;
  private eventId: string = '';
  event!: EventConcert;

  constructor(private actRouter: ActivatedRoute,
    private router: Router,
    http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    let apiUrl = `${ApplicationPaths.ApiBasePath}`

    this.route = actRouter.snapshot;
    this.eventId = this.route.params['eventId'];
    http.get<EventConcert>(apiUrl + 'concert/' + this.eventId).subscribe(result => {
      this.event = result;
    }, error => console.error(error))
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
  }

}
