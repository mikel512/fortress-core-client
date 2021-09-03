import { HttpClient } from '@angular/common/http';
import { AfterViewChecked, Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Venue } from '../../interface/venue';

@Component({
  selector: 'app-venues-page',
  templateUrl: './venues-page.component.html',
  styleUrls: ['./venues-page.component.css']
})
export class VenuesPageComponent implements OnInit {
  venues: Venue[] = [];
  private route: ActivatedRouteSnapshot;
  currentCity: string = '';
  citiesDropdown: string[] = ['Arcata', 'Eureka', 'All'];

  constructor(private actRouter: ActivatedRoute,
    private router: Router,
    http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.route = actRouter.snapshot;
    this.currentCity = this.route.params['city'];
    this.citiesDropdown = this.citiesDropdown.filter(e => e!== this.currentCity);
    console.log(this.currentCity);

    if(this.currentCity === 'All') {

      http.get<Venue[]>(baseUrl + '/api/venue').subscribe(result => {
        this.venues = result;
      }, error => console.error(error));
    } else {

      http.get<Venue[]>(baseUrl + 'api/venue/city/' + this.currentCity).subscribe(result => {
        this.venues = result;
      }, error => console.error(error));
    }

  }

  ngOnInit(): void {
  }

  eventsNav() {
    this.router.navigate([this.currentCity]);
  }
  
  navigateTo(e: Event) {
    let place = (<HTMLSelectElement>e.target).value;
    let value = 'venues/' + place;
    if(value) {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate([value]));
    }
  }

}
