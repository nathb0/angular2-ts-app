import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {Location, LocationService} from './location.service'

@Component({
	selector: 'univ-locations',
	templateUrl: './app/locations/locations.component.html'
	directives: [ROUTER_DIRECTIVES]
})
export class LocationComponent implements OnInit {
  locations: Location[];

  constructor(private _service: LocationService) { }

  ngOnInit() {
    this.locations = [];
	this._service.getLocations()
		.subscribe(locations => this.locations = locations);
	}
}