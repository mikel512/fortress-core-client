import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ApplicationPaths } from 'src/api-authorization/api-authorization.constants';
import { Venue } from '../../../../interface/venue';

@Component({
  selector: 'app-venues-page',
  templateUrl: './venues-page.component.html',
  styleUrls: ['./venues-page.component.css']
})
export class VenuesPageComponent implements OnInit {
  venues: Venue[] = [];
  private route: ActivatedRouteSnapshot;
  currentCity: string = '';

  constructor(private actRouter: ActivatedRoute,
    http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    let apiUrl = `${ApplicationPaths.ApiBasePath}`

    this.route = actRouter.snapshot;
    this.currentCity = this.route.params['city'];

    if(this.currentCity === 'All') {

      http.get<Venue[]>(apiUrl + 'venue').subscribe(result => {
        this.venues = result;
      }, error => console.error(error));
    } else {

      http.get<Venue[]>(apiUrl + 'venue/city/' + this.currentCity).subscribe(result => {
        this.venues = result;
      }, error => console.error(error));
    }

  }

  ngOnInit(): void {
  }
}
